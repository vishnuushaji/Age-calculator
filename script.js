function calculateAge() {
    
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);

    
    if (isNaN(birthdate.getTime())) {
        alert('Please select a valid birthdate.');
        return;
    }

    
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

   
    
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You are${age} years old.`;

}


