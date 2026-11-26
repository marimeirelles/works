(function(){
  var lb=document.querySelector('dialog.lb');
  if(lb&&lb.showModal){
    var im=lb.querySelector('img'),cp=lb.querySelector('p');
    document.addEventListener('click',function(e){
      var a=e.target.closest&&e.target.closest('a.zoom');
      if(!a)return;e.preventDefault();
      im.src=a.getAttribute('href');im.alt=(a.querySelector('img')||{}).alt||'';cp.textContent=a.getAttribute('data-cap')||'';
      lb.showModal();
    });
    lb.querySelector('.lb-x').addEventListener('click',function(){lb.close();});
    lb.addEventListener('click',function(e){if(e.target===lb)lb.close();});
  }
  var tt=document.querySelector('.totop');
  if(tt){var f=function(){tt.classList.toggle('show',window.scrollY>900);};window.addEventListener('scroll',f,{passive:true});f();}
  var links=[].slice.call(document.querySelectorAll('.toc a'));
  if(links.length&&'IntersectionObserver' in window){
    var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(a){a.classList.remove('on');});var a=map[en.target.id];if(a){a.classList.add('on');a.scrollIntoView({block:'nearest',inline:'nearest'});}}});},{rootMargin:'-40% 0px -55% 0px'});
    Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s);});
  }
  var m=document.querySelector('.mnav');
  if(m){m.addEventListener('click',function(e){if(e.target.tagName==='A')m.removeAttribute('open');});
    document.addEventListener('click',function(e){if(!m.contains(e.target))m.removeAttribute('open');});}
})();
