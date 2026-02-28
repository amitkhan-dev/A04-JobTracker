
// calculaton 
function calculation() {
  const totalJobs = document.getElementById('totalCount');
  const interviewJobs = document.getElementById('interviewCount');
  const rejectedJobs = document.getElementById('rejectedCount');
  const rightTotal = document.getElementById('rightTotal');

  let interviewCount = 0;
  let rejectedCount = 0;

  const allCards = document.querySelectorAll('.job-card');
  const total = allCards.length;

for(let card of allCards){
    const status = card.dataset.status;

  if (status === "INTERVIEW") {
      interviewCount++;
    }
    else if (status === "REJECTED") {
      rejectedCount++;
    }
  }
  
  if(totalJobs !== null) {
    totalJobs.innerText = total;

}
  if(interviewJobs !== null) {
    interviewJobs.innerText = interviewCount;
  } 
  if(rejectedJobs !== null){
    rejectedJobs.innerText = rejectedCount;
  } 
  
  if(rightTotal) {
      rightTotal.innerText = total;
  }

}


// Update job status
function updateStatus(jobIfo, newStatus) {

  const card = jobIfo.closest('.job-card');

  if (!card) return;
  card.dataset.status = newStatus;
  const statusBtn = card.querySelector('.status-btn');

  if (!statusBtn) return;
  statusBtn.innerText = newStatus;
  statusBtn.className = "status-btn px-3 py-1 rounded text-xs font-bold  mt-3";

  if (newStatus === "INTERVIEW") {
    statusBtn.classList.add("border","border-green-500","text-green-500" ,"hover:bg-green-200",
    );

  }

  else if (newStatus === "REJECTED") {
  statusBtn.classList.add("border","border-red-500","text-red-500","hover:bg-red-200",
    );

  }

  else {
statusBtn.classList.add("bg-gray-200","text-gray-600"
  
  );

}

  calculation();

}


// btn toggling

function toggling(selectedStatus) {

  const allButtons = document.querySelectorAll('.filter-btn');
  for(let btn of allButtons){
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-white', 'text-gray-600');
  }
  const activeBtn = document.getElementById('btn-' + selectedStatus);

  if (activeBtn) {
  activeBtn.classList.remove('bg-white', 'text-gray-600');

    activeBtn.classList.add('bg-blue-600', 'text-white');

  }


  const cards = document.querySelectorAll('.job-card');
  const noJobCard = document.getElementById('noJobFound');

  let visibleCount = 0;


  cards.forEach(card => {

    const status = card.dataset.status;

    if (selectedStatus === "All") {

      card.style.display = "block";

      visibleCount++;

    }

    else {

      if (status === selectedStatus.toUpperCase()) {

        card.style.display = "block";

        visibleCount++;

      }

      else {
        noJobCard.classList.remove("hidden");

        card.style.display = "none";

      }

    }

  });

if (visibleCount === 0) {
  noJobCard.classList.remove("hidden");
} else {
  noJobCard.classList.add("hidden");
}
  //right side count
  const rightTotal = document.getElementById('rightTotal');

  if (rightTotal) {

    rightTotal.innerText = visibleCount;

  }

}

// Delete btn
function deleteBtn(button) {
  const card = button.closest('.job-card');

  if (!card) return;
  card.remove();
  calculation();

}

calculation();