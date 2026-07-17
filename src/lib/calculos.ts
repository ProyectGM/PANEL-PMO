export type Estado='pendiente'|'en curso'|'terminada';
export const avance=(estado:Estado)=>estado==='terminada'?100:estado==='en curso'?50:0;
export const promedio=(estados:Estado[])=>estados.length?Math.round(estados.reduce((n,s)=>n+avance(s),0)/estados.length):0;
export const estadoCalculado=(estados:Estado[]):Estado=>estados.length&&estados.every(s=>s==='terminada')?'terminada':estados.some(s=>s==='en curso'||s==='terminada')?'en curso':'pendiente';
