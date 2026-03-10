// Typing Effect
const words = ["Web Developers","AI Interface Designers","UI/UX designer","Digital Innovators","Digital marketer","Business strategist","Game developer","Graphic designer","Product designer"];
let i=0,j=0,current="",isDeleting=false;
function type(){
  current=words[i];
  if(!isDeleting){document.querySelector(".typing").textContent=current.substring(0,j++);}
  else{document.querySelector(".typing").textContent=current.substring(0,j--);}
  if(j==current.length){isDeleting=true; setTimeout(type,1000); return;}
  if(j==0){isDeleting=false;i++; if(i==words.length)i=0;}
  setTimeout(type,100);
}
type();

// Mobile Menu Toggle
function toggleMenu(){
  const nav=document.getElementById("navMenu");
  if(nav.style.display=="flex"){nav.style.display="none";}
  else{nav.style.display="flex";}
}

// Projects Data
const projects=[
  {id:'ai',img:'ai_chat.jpg',title:'AI Interface',desc:'A modern AI interface designed to interact with users through smart responses and clean UI.'},
  {id:'betting',img:'betting.jpg',title:'Betting Interface',desc:'A responsive betting dashboard with live odds, user account features and modern layout.'},
  {id:'school',img:'school-project.JPG',title:'School Website',desc:'A secondary school learning platform with login system, subjects and course materials.'}
];

let currentIndex=0;

// Open modal with zoom animation
function openModal(projectId){
  const modal=document.getElementById('projectModal');
  currentIndex=projects.findIndex(p=>p.id===projectId);
  document.getElementById('modalImg').src=projects[currentIndex].img;
  document.getElementById('modalTitle').textContent=projects[currentIndex].title;
  document.getElementById('modalDesc').textContent=projects[currentIndex].desc;
  modal.style.display='block';
  modal.classList.add('show');
}

// Close modal
function closeModal(){
  const modal=document.getElementById('projectModal');
  modal.style.display='none';
  modal.classList.remove('show');
}

// Update modal content
function updateModal(){
  document.getElementById('modalImg').src=projects[currentIndex].img;
  document.getElementById('modalTitle').textContent=projects[currentIndex].title;
  document.getElementById('modalDesc').textContent=projects[currentIndex].desc;
}

// Prev/Next Navigation
function prevProject(){currentIndex=(currentIndex-1+projects.length)%projects.length;updateModal();}
function nextProject(){currentIndex=(currentIndex+1)%projects.length;updateModal();}

// Keyboard navigation
document.addEventListener('keydown', e=>{
  if(document.getElementById('projectModal').style.display==='block'){
    if(e.key==='ArrowLeft') prevProject();
    if(e.key==='ArrowRight') nextProject();
    if(e.key==='Escape') closeModal();
  }
});

// Swipe gestures for mobile
let touchStartX=0,touchEndX=0;
const modal=document.getElementById('projectModal');
modal.addEventListener('touchstart', e=>{touchStartX=e.changedTouches[0].screenX;});
modal.addEventListener('touchend', e=>{touchEndX=e.changedTouches[0].screenX;handleGesture();});
function handleGesture(){
  if(touchEndX<touchStartX-50) nextProject();
  if(touchEndX>touchStartX+50) prevProject();
}

// Close modal by clicking outside image
modal.addEventListener('click', e=>{
  if(e.target===modal) closeModal();
});