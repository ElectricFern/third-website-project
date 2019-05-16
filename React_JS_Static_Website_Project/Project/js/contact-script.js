const initalize = function(){
    document.getElementById('button-cancel').addEventListener('click', cancel);
    document.getElementById('button-send').addEventListener('click', send);
}

const cancel = function(eval){
    //Prevents HTML form cancels
    eval.preventDefault();
    // Programmed cancel
    document.getElementById('form-user').cancel();
}

const send = function(eval){
    eval.preventDefault(); 
	
    let fails = validate();
	//if there are no fails
    if(fails.length === 0){

        document.getElementById('form-user').submit();
    }else{
        fails.forEach(function(objectj){
            let field = document.getElementById(objectj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', objectj.message);
        })
    }
}

const validate = function(eval){

	// array to store types of invalid input
    let invalid = [];

	//check box variables for validation
    let chk = document.getElementById('input-robot');
	//check-box invalid message statements if !chk (not checked)
    if(!chk.checked){
        invalid.push({input: 'input-robot', message: 'Robots use different form'})
    }
	//select drop-down validation
    let select = document.getElementById('input-subject');
	//invalid message statement if default is still selected
    if( select.selectedIndex === 0 ){
        invalid.push({input:'input-subject', message:'Please select a subject'})
    }
    //variables for validation
    let name = document.getElementById('input-name');
	
    let email = document.getElementById('input-email');
	
    let notes = document.getElementById('input-notes');	
	//invalid message statements if invalid input
    if( name.value === ""){
        invalid.push({input:'input-name', message:'Required Field'})
    } 
    if( email.value === ""){
        invalid.push({input:'input-email', message:'Required Field'})
    }
    if( notes.value.length > 50){
        invalid.push({input:'input-notes', message:'Less than 50 characters please'})
    }
    // if any of the above variables are invalid it returns invalid message
    return invalid;
}


document.addEventListener('DOMContentLoaded', initalize);