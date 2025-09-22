
function copyCommand(cmd){
  navigator.clipboard.writeText(cmd).then(()=>{
    const b=document.createElement('div');
    b.textContent='Comando copiado: '+cmd;
    b.style.position='fixed';b.style.right='20px';b.style.bottom='20px';b.style.background='#ff3b3b';b.style.color='#fff';b.style.padding='8px 12px';b.style.borderRadius='6px';document.body.appendChild(b);
    setTimeout(()=>b.remove(),1500);
  });
}
function showRifle(){
  document.querySelectorAll('.anim-item').forEach(it=>{
    if(it.getAttribute('data-rifle')==='1') it.style.display='flex'; else it.style.display='none';
  });
}
function showAll(){ document.querySelectorAll('.anim-item').forEach(it=>it.style.display='flex'); }
function doSearch(){
  const q=document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('.anim-item').forEach(it=>{
    const name=it.getAttribute('data-name')||'';
    it.style.display = name.includes(q)?'flex':'none';
  });
}
