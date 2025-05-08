function calculateAge() {
    const birthDate = new Date(document.getElementById("birthday").value);
    const today = new Date();
  
    if (isNaN(birthDate.getTime())) {
      document.getElementById("result").textContent = "Please enter a valid date.";
      return;
    }
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    document.getElementById("result").textContent = `You are ${age} years old.`;
  }
  