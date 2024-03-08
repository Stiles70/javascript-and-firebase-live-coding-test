var allStudents = []
function submit() {
    if(localStorage.allstudents){
        allStudents = JSON.parse(localStorage.getItem('allstudents'))
    }
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var mailphone = document.getElementById('mailphone').value
    var password = document.getElementById('password').value

    if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
        empty.style.display = 'block'
        setTimeout(()=>{
            empty.style.display ='none'
        }, 3000);
    } else {
        let confirmation = confirm('Are you sure you want to submit')
        if (confirmation == true) {

            var studentObj = {firstname,lastname,mailphone,password}
            var  pushedStudents = allStudents.push(studentObj)
    
            if (pushedStudents) {
                console.log(pushedStudents);
                success.style.display = 'block'
                // setTimeout(()=>{
                //     success.style.display = 'none'
                // }, 3000);
                localStorage.setItem('allstudents', JSON.stringify(allStudents))
                window.location.href = 'dashboard.html'
                
            } else {
                alert('Failed to submit')
            }
            
            console.log(allStudents);
        
            document.getElementById('firstname').value = ''
            document.getElementById('lastname').value = ''
            document.getElementById('mailphone').value = ''
            document.getElementById('password').value = ''
           
            } else {
                alert ('RECHECK')
            }
            display()
        }
}

