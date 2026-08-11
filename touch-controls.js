// WATCHTVarr mobile controls + save helpers
(() => {
  const stateKey = 'watchtvarr-save-v1';
  window.WATCHTVarrSave = {
    load() { try { return JSON.parse(localStorage.getItem(stateKey) || '{}'); } catch { return {}; } },
    save(data) { try { localStorage.setItem(stateKey, JSON.stringify(data)); } catch {} },
    clear() { try { localStorage.removeItem(stateKey); } catch {} }
  };
  const keys = window.WATCHTVarrKeys || (window.WATCHTVarrKeys = {});
  const makePad = () => {
    if (!document.body || document.getElementById('touchPad')) return;
    const pad = document.createElement('div'); pad.id='touchPad';
    pad.innerHTML='<button data-k="arrowup">▲</button><div><button data-k="arrowleft">◀</button><button data-k="space">●</button><button data-k="arrowright">▶</button></div><button data-k="arrowdown">▼</button>';
    Object.assign(pad.style,{position:'fixed',left:'14px',bottom:'14px',zIndex:9999,textAlign:'center',userSelect:'none'});
    pad.querySelectorAll('button').forEach(b=>{Object.assign(b.style,{width:'52px',height:'42px',margin:'3px',border:0,borderRadius:'14px',background:'#ffffffdd',fontWeight:900,fontSize:'18px',boxShadow:'0 4px 12px #0003',touchAction:'none'}); const k=b.dataset.k; const on=e=>{e.preventDefault();keys[k]=true}; const off=e=>{e.preventDefault();keys[k]=false}; b.addEventListener('pointerdown',on); b.addEventListener('pointerup',off); b.addEventListener('pointercancel',off); b.addEventListener('pointerleave',off)});
    document.body.appendChild(pad);
  };
  addEventListener('DOMContentLoaded', makePad);
})();
