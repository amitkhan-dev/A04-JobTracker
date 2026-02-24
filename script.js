// 
let jobs = [
    { id: 1, companyName: "Mobile First Corp",
      position: "React Native Developer", 
      type: "Remote • Full-time• $130,000 - $175,000", 
      description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", 
      status: "NOT APPLIED" },

    { id: 2, 
      companyName: "WebFlow Agency", 
      position: "Web Designer & Developer", 
      type: " Los Angeles, CA . Part-time . $80k - $120k", 
      description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", 
      status: "NOT APPLIED" },

    { id: 3, 
      companyName: "DataViz Solutions", 
      position: "Data Visualization Specialist", 
      type: "Boston Full-time • $125,000 - $165,000", 
      description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", 
      status: "NOT APPLIED" },

    { id: 4, 
      companyName: "CloudFirst Inc Minds", 
      position: "Backend Developer", 
      type: " Seattle, WA . Full-time .$140,000 - $190,000", 
      description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", 
      status: "NOT APPLIED" },

    { id: 5, 
      companyName: "Innovation Labs", 
      position: "UI/UX Engineer", 
      type: "Austin, TX •Full-time•$110,000 - $150,000", 
      description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
      status: "NOT APPLIED" },
      
    { id: 6, 
      companyName: "MegaCorp Solutions", 
      position: "JavaScript Developer", 
      type: "New York, NY• Full-time•$130,000 - $170,00", 
      description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", 
      status: "NOT APPLIED" },

    { id: 7, 
      companyName: "Startup XYZ", 
      position: "Full Stack Engineer", 
      type: "Remote•Full-time •$120,000 - $160,000", 
      description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", 
      status: "NOT APPLIED" },

    { id: 8, 
      companyName: "TechCorp Industries", 
      position: "Senior Frontend Developer", 
      type: "San Francisco, CA • Full-time •$130,000 - $175,000", 
      description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", 
      status: "NOT APPLIED" }
];


function dashboard() {
  const totalJobs = document.getElementById('totalCount');
  const interviewJob = document.getElementById('interviewCount');
  const rejectedJob = document.getElementById('rejectedCount');
  const availableJobsCount = document.getElementById('rightTotal'); 

  let total = jobs.length; 
  let interviewCount = 0;
  let rejectedCount = 0;

  for (let job of jobs) {
  
    if (job.status === 'INTERVIEW') {
      interviewCount++;
    } else if (job.status === 'REJECTED') {
      rejectedCount++;
    }
  }

  if(totalJobs !== null) {
    totalJobs.innerText = total;

}
  if(interviewJob !== null) {
    interviewJob.innerText = interviewCount;
  } 
  if(rejectedJob !== null){
    rejectedJob.innerText = rejectedCount;
  } 
  
  if(availableJobsCount) {
      availableJobsCount.innerText = total;
  }
}

function allJobs(jobsDisplay) {

  const jobList = document.getElementById('jobCardsList');
  const noJobFound = document.getElementById('noJobFound');
  if(!jobList) return;
  jobList.innerHTML = "";

  if (jobsDisplay.length === 0) {
    noJobFound.classList.remove('hidden');
    return; 
  } else {
    noJobFound.classList.add('hidden');
  }

  for (let job of jobsDisplay) {
    let statusText = "NOT APPLIED";
    let statusColor = "bg-gray-200 text-gray-600";


    if (job.status === "INTERVIEW") {
      statusText = "INTERVIEW";
      statusColor = "border-1 border-green-500 text-green-500 font-bold rounded text-[10px] hover:bg-green-50";
    } else if (job.status === "REJECTED") {
      statusText = "REJECTED";
      statusColor = "border border-red-500 text-red-500 font-bold rounded text-[10px] hover:bg-red-50";
    }

    jobList.innerHTML += `
      <div class="bg-amber-50 p-6 rounded-xl shadow-sm border border-gray-100 mb-6 transition-all hover:shadow-md">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-bold text-[#002c5]">${job.companyName}</h3>
            <p class="text-[#64748b]  text-sm">${job.position}</p>
          </div>
          <button onclick="deleteBtn(${job.id})" class=" hover:text-red-500 ">
            <i class="fa-solid fa-trash-can text-lg"></i>
          </button>
        </div>
        
        <div class="mt-2 text-[#64748b]">
          <p>${job.type}</p>
        </div>

        <div class="mt-4">
          <span class="inline-block px-5 py-2 rounded text-[10px] font-bold ${statusColor}">
            ${statusText}
          </span>
        </div>
        
        <p class="mt-4 text-[#323b49] text-sm ">${job.description}</p>
        
        <div class="mt-6 flex gap-3">
          <button onclick="updateStatus(${job.id}, 'INTERVIEW')" class="px-5 py-2 border border-green-500 text-green-500 font-bold rounded text-[10px] hover:bg-green-50 ">INTERVIEW</button>
          <button onclick="updateStatus(${job.id}, 'REJECTED')" class="px-5 py-2 border border-red-500 text-red-500 font-bold rounded text-[10px] hover:bg-red-50 ">REJECTED</button>
        </div>
      </div>`;
  }
}


allJobs(jobs);
dashboard();