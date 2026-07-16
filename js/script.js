const q=s=>document.querySelector(s);let activeCar=0,activePhoto=0;
const header=q('#siteHeader');addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
const menu=q('#mobileMenu');q('#menuButton').onclick=()=>{menu.classList.add('open');document.body.classList.add('no-scroll')};q('#menuClose').onclick=closeMenu;menu.querySelectorAll('a').forEach(a=>a.onclick=closeMenu);function closeMenu(){menu.classList.remove('open');document.body.classList.remove('no-scroll')}
function openCar(i){activeCar=i;activePhoto=0;const c=CARS[i];q('#modalTitle').textContent=c.name;q('#modalNumber').textContent=`VETURA ${String(i+1).padStart(2,'0')}`;renderPhoto();const t=q('#thumbs');t.innerHTML='';c.images.forEach((src,n)=>{const b=document.createElement('button');b.innerHTML=`<img src="${src}" alt="">`;b.onclick=()=>{activePhoto=n;renderPhoto()};t.appendChild(b)});q('#carModal').hidden=false;document.body.classList.add('no-scroll');updateThumbs()}
function renderPhoto(){q('#modalImage').src=CARS[activeCar].images[activePhoto];updateThumbs()}
function updateThumbs(){document.querySelectorAll('#thumbs button').forEach((b,i)=>b.classList.toggle('active',i===activePhoto))}
function prevPhoto(){const a=CARS[activeCar].images;activePhoto=(activePhoto-1+a.length)%a.length;renderPhoto()}
function nextPhoto(){const a=CARS[activeCar].images;activePhoto=(activePhoto+1)%a.length;renderPhoto()}
function closeCar(){q('#carModal').hidden=true;document.body.classList.remove('no-scroll')}
function selectCar(name){q('#carSelect').value=name}
function reserveModal(){selectCar(CARS[activeCar].bookingName||CARS[activeCar].name);closeCar()}
addEventListener('keydown',e=>{if(q('#carModal').hidden)return;if(e.key==='Escape')closeCar();if(e.key==='ArrowLeft')prevPhoto();if(e.key==='ArrowRight')nextPhoto()});
q('#bookingForm').addEventListener('submit',e=>{e.preventDefault();const v=id=>q('#'+id).value.trim();const text=`Përshëndetje Rent A Car 007!%0A%0ADua të rezervoj një veturë.%0A%0AEmri: ${encodeURIComponent(v('firstName')+' '+v('lastName'))}%0ATelefoni: ${encodeURIComponent(v('phone'))}%0AVetura: ${encodeURIComponent(v('carSelect'))}%0AMarrja: ${encodeURIComponent(v('pickupDate')+' '+v('pickupTime'))}%0AKthimi: ${encodeURIComponent(v('returnDate')+' '+v('returnTime'))}%0ALokacioni: ${encodeURIComponent(v('location'))}%0AMesazhi: ${encodeURIComponent(v('message')||'-')}`;window.open('https://wa.me/38344181803?text='+text,'_blank')});
window.openCar=openCar;window.closeCar=closeCar;window.prevPhoto=prevPhoto;window.nextPhoto=nextPhoto;window.selectCar=selectCar;window.reserveModal=reserveModal;
