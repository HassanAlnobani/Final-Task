'use strict';


function Job(name, major, phone, price) {
        this.name = name;
        this.major = major;
        this.phone = phone;
        this.price = price;
        Jobs.push(this);

    }
    let Jobs = [];
    // function Job(name, imgurl, major, price) {
    // to render the new Job using DOM way
    Job.prototype.renderJobs = function(){ 
        
        // parent div
        const bigDiv = document.getElementById('Jobs');
        // child div    
        const divEle = document.createElement('div');
        bigDiv.appendChild(divEle);

        const h4 = document.createElement('h4');
        divEle.appendChild(h4);
        h4.textContent = this.name;
        
        // render the major []
        const m = document.createElement('m');
        divEle.appendChild(m);
            m.textContent = this.major;
            

    
        const phone = document.createElement('phone');
        divEle.appendChild(phone);
        phone.textContent = this.phone;


        const p2 = document.createElement('p');
        divEle.appendChild(p2);
        p2.textContent = `${this.price} JD`;

        


    }




    const Plumber = new Job('Ahmed', 'plumber', '99999999','15');
    const Baker = new Job('Mohammad', 'baker', '99999999999','15');
    const Carpenter = new Job('Khaled', 'carpenter', '9999999','15');
    const Smith = new Job('Sameh', 'smith', '99999999','15');



for (let j = 0; j < Jobs.length; j++) {
    Jobs[j].renderJobs();

}


let htmlForm = document.getElementById('JobForm');
htmlForm.addEventListener("submit", addNewJob)

function addNewJob(event) {
    event.preventDefault();
    
    let name = event.target.name.value;
    let major = event.target.major.value;
    let phone = event.target.phone.value;
    let price = event.target.price.value;

    let newJob = new Job(name, major, phone, price);
    newJob.renderJobs();
    saveToLocalStorage();
}

// local storage:
// 1. where do I need to call this function
// 2. allDrinks in an array, and setItem methos, takes a string 
function saveToLocalStorage() {
    const stringifiedArr = JSON.stringify(Jobs);
    localStorage.setItem("Jobs", stringifiedArr);

}

// 1. where do I need to call this function? 
// 2 . How to dispaly data I get from ls as jobs on my page
// 3. convert string to array of objects
// 4. loop through the array to render each object as a job
function getFromLocalStorage() {

    let jobsStr = localStorage.getItem("Jobs");
    const JobsArr = JSON.parse(jobsStr);
    if (JobsArr !== null) {
        for (let i = Jobs.length; i < JobsArr.length; i++) {
            const temp = new Job(JobsArr[i].name, JobsArr[i].major, JobsArr[i].phone);
            temp.renderJobs();
        }
    }

}

getFromLocalStorage();