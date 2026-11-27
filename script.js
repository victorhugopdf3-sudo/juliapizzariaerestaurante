// PIZZARIA E RESTAURANTE DA JÚLIA

// ATENÇÃO: em um site somente HTML/CSS/JS,
// a senha fica visível para quem inspecionar o código.
const ADMIN_PASSWORD = "pizzariaerestaurante92029";

// Troque pelo WhatsApp correto da pizzaria.
const WHATSAPP = "5584981293530";

const INITIAL_PRODUCTS = [
  {id:"p01",name:"Bella Pizza",category:"pizza",description:"Molho, frango, calabresa, mussarela e bacon",prices:{P:29.99,M:35.99,G:38.99,F:48.99},available:true},
  {id:"p02",name:"Calafrango",category:"pizza",description:"Molho, frango, calabresa e mussarela",prices:{P:27.99,M:33.99,G:39.99,F:48.99},available:true},
  {id:"p03",name:"Portuguesa",category:"pizza",description:"Molho, presunto, ervilha, ovo, mussarela e cebola",prices:{P:27.99,M:33.99,G:39.99,F:48.99},available:true},
  {id:"p04",name:"2 Queijos",category:"pizza",description:"Molho, mussarela e catupiry",prices:{P:27.99,M:31.99,G:37.99,F:48.99},available:true},
  {id:"p05",name:"3 Queijos",category:"pizza",description:"Molho, mussarela, provolone e catupiry",prices:{P:27.99,M:31.99,G:37.99,F:48.99},available:true},
  {id:"p06",name:"4 Queijos",category:"pizza",description:"Molho, mussarela, gorgonzola, provolone e catupiry",prices:{P:26.99,M:31.99,G:39.99,F:48.99},available:true},
  {id:"p07",name:"À Moda da Casa",category:"pizza",description:"Molho, mussarela, calabresa, milho, pimentão, cebola, presunto e bacon",prices:{P:30.99,M:38.99,G:48.99,F:50},available:true},
  {id:"p08",name:"Carne de Sol",category:"pizza",description:"Molho, carne de sol, cebola roxa e mussarela",prices:{P:30.99,M:38.99,G:48.99,F:50},available:true},
  {id:"p09",name:"Carne de Sol com Catupiry",category:"pizza",description:"Molho, carne de sol, catupiry e tomate",prices:{P:30.99,M:36.99,G:48.99,F:50},available:true},
  {id:"p10",name:"Carne de Sol Requeijão",category:"pizza",description:"Molho, carne de sol e requeijão cremoso",prices:{P:30.99,M:36.99,G:48.99,F:50},available:true},
  {id:"p11",name:"Ciciliana",category:"pizza",description:"Molho, frango, mussarela e bacon",prices:{P:29.99,M:34.99,G:42.99,F:50},available:true},
  {id:"p12",name:"Caipira",category:"pizza",description:"Molho, frango, mussarela e milho",prices:{P:30.99,M:38.99,G:48.99,F:50},available:true},
  {id:"p13",name:"Bacon",category:"pizza",description:"Molho, bacon e mussarela",prices:{P:30.99,M:38.99,G:48.99,F:50},available:true},
  {id:"p14",name:"Mista",category:"pizza",description:"Molho, presunto, mussarela e tomate",prices:{P:30.99,M:36.99,G:48.99,F:50},available:true},
  {id:"p15",name:"Napolitana",category:"pizza",description:"Molho, mussarela, tomate e parmesão",prices:{P:27.99,M:31.99,G:37.99,F:48.99},available:true},
  {id:"p16",name:"Calabacon",category:"pizza",description:"Molho, calabresa, bacon e mussarela",prices:{P:30.99,M:36.99,G:48.99,F:50},available:true},
  {id:"p17",name:"Paulistana",category:"pizza",description:"Molho, calabresa, ovo, bacon e mussarela",prices:{P:29.99,M:35.99,G:46.99,F:50},available:true},
  {id:"p18",name:"À Moda do Pizzaiolo",category:"pizza",description:"Molho, carne de sol, frango, bacon e mussarela",prices:{P:30.99,M:36.99,G:48.99,F:50},available:true},
  {id:"p19",name:"Califórnia",category:"pizza",description:"Molho, frango, calabresa, bacon, mussarela e catupiry",prices:{P:29.99,M:35.99,G:46.99,F:50},available:true},
  {id:"p20",name:"Frango Especial",category:"pizza",description:"Molho, frango, mussarela e cheddar",prices:{P:30.99,M:36.99,G:48.99,F:50},available:true},
  {id:"p21",name:"Chocolate",category:"pizza",description:"Chocolate granulado",prices:{P:25,M:30,G:35,F:50},available:true},
  {id:"p22",name:"Mussarela",category:"pizza",description:"Molho, mussarela e tomate",prices:{P:29.99,M:35.99,G:46.99,F:50},available:true},
  {id:"p23",name:"Frango e Catupiry",category:"pizza",description:"Molho, frango e catupiry original",prices:{P:29.99,M:35.99,G:46.99,F:50},available:true},
  {id:"p24",name:"Frango com Requeijão",category:"pizza",description:"Molho, frango e requeijão cremoso",prices:{P:29.99,M:36.99,G:42.99,F:50},available:true},
  {id:"p25",name:"Frango com Mussarela",category:"pizza",description:"Molho, frango, milho e mussarela",prices:{P:26.99,M:36.99,G:42.99,F:50},available:true},
  {id:"p26",name:"Calabresa",category:"pizza",description:"Molho, calabresa e mussarela",prices:{P:29.99,M:35.99,G:46.99,F:50},available:true},
  {id:"p27",name:"Calabresa com Requeijão",category:"pizza",description:"Molho, calabresa e requeijão cremoso",prices:{P:29.99,M:35.99,G:46.99,F:50},available:true},
  {id:"b01",name:"Coca-Cola 2 Litros",category:"bebida",description:"Refrigerante 2 litros",price:15,available:true},
  {id:"b02",name:"Coca-Cola 1 Litro",category:"bebida",description:"Refrigerante 1 litro",price:10,available:true},
  {id:"b03",name:"Coca-Cola Lata",category:"bebida",description:"Refrigerante em lata",price:6,available:true},
  {id:"b04",name:"Guaraná 2 Litros",category:"bebida",description:"Refrigerante 2 litros",price:15,available:true},
  {id:"b05",name:"Guaraná 1 Litro",category:"bebida",description:"Refrigerante 1 litro",price:10,available:true},
  {id:"b06",name:"Guaraná Lata",category:"bebida",description:"Refrigerante em lata",price:6,available:true},
  {id:"b07",name:"Água Mineral 500 ml",category:"bebida",description:"Água mineral",price:3,available:true}
];

const money = v => Number(v||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let products = loadSavedProducts();
let cart = [];
let filter = "pizza";
let editingId = null;

function loadSavedProducts(){
  try {
    const saved = localStorage.getItem("juliaMenuProducts");
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
  } catch {
    return JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
  }
}

function saveProducts(){
  localStorage.setItem("juliaMenuProducts",JSON.stringify(products));
}

function esc(s=""){
  return String(s).replace(/[&<>"']/g,c=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

function toast(message){
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),2200);
}

// MOSTRAR PRODUTOS
function renderProducts(){
  const list = products.filter(p =>
    (filter==="todos" || p.category===filter) && p.available
  );

  $("#productGrid").innerHTML = list.map(p => {
    if(p.category==="pizza"){
      return `
        <article class="product-card" data-id="${p.id}">
          <div class="card-top">
            <h3>${esc(p.name)}</h3>
            <span class="tag">PIZZA</span>
          </div>
          <p>${esc(p.description||"Sabor especial da casa")}</p>
          <div class="size-picker">
            ${["P","M","G","F"].map((s,i)=>`
              <button class="size-option ${i===0?"selected":""}" data-size="${s}">
                ${s}<span>${money(p.prices[s])}</span>
              </button>
            `).join("")}
          </div>
          <div class="card-bottom">
            <strong class="selected-price">${money(p.prices.P)}</strong>
            <button class="add-btn" data-add="${p.id}">Adicionar +</button>
          </div>
        </article>`;
    }

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="card-top">
          <h3>${esc(p.name)}</h3>
          <span class="tag">BEBIDA</span>
        </div>
        <p>${esc(p.description||"")}</p>
        <div class="card-bottom">
          <strong class="selected-price">${money(p.price)}</strong>
          <button class="add-btn" data-add="${p.id}">Adicionar +</button>
        </div>
      </article>`;
  }).join("") || '<p class="empty">Nenhum produto disponível nesta categoria.</p>';
}

// CARRINHO E CALCULADORA
function renderCart(){
  const count = cart.reduce((a,x)=>a+x.qty,0);

  $("#cartCount").textContent = `${count} ${count===1?"item":"itens"}`;

  $("#cartItems").innerHTML = cart.length ? cart.map(i=>`
    <div class="cart-line">
      <div>
        <strong>${esc(i.name)}</strong>
        <small>${i.size?"Tamanho "+i.size+" · ":""}${money(i.price)} cada</small>
      </div>
      <div class="line-actions">
        <button data-minus="${i.key}">−</button>
        <b>${i.qty}</b>
        <button data-plus="${i.key}">+</button>
        <b>${money(i.price*i.qty)}</b>
        <button class="remove" data-remove="${i.key}">×</button>
      </div>
    </div>
  `).join("") : '<p class="empty">Seu carrinho está vazio. Escolha algo delicioso!</p>';

  const total = cart.reduce((a,x)=>a+x.price*x.qty,0);
  $("#cartTotal").textContent = money(total);
}

function addProduct(p,size=""){
  const price = p.category==="pizza" ? Number(p.prices[size]) : Number(p.price);
  const key = p.id+size;
  const old = cart.find(x=>x.key===key);

  if(old) old.qty++;
  else cart.push({
    key,
    id:p.id,
    name:p.name,
    size,
    price,
    qty:1
  });

  renderCart();
  toast("Produto adicionado ao carrinho!");
}

// SELEÇÃO DO TAMANHO E ADIÇÃO
$("#productGrid").addEventListener("click",e=>{
  const size = e.target.closest("[data-size]");

  if(size){
    const card = size.closest(".product-card");

    $$(".size-option",card).forEach(b=>b.classList.remove("selected"));
    size.classList.add("selected");

    const p = products.find(x=>x.id===card.dataset.id);
    card.querySelector(".selected-price").textContent = money(p.prices[size.dataset.size]);
  }

  const add = e.target.closest("[data-add]");

  if(add){
    const p = products.find(x=>x.id===add.dataset.add);
    const selectedSize = p.category==="pizza"
      ? add.closest(".product-card").querySelector(".size-option.selected")?.dataset.size
      : "";

    if(p.category==="pizza" && !selectedSize){
      return toast("Selecione o tamanho da pizza.");
    }

    addProduct(p,selectedSize);
  }
});

// FILTROS
$$(".tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $$(".tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderProducts();
  });
});

// ALTERAR QUANTIDADES
$("#cartItems").addEventListener("click",e=>{
  const plus = e.target.closest("[data-plus]");
  const minus = e.target.closest("[data-minus]");
  const remove = e.target.closest("[data-remove]");

  if(plus){
    const item = cart.find(x=>x.key===plus.dataset.plus);
    if(item) item.qty++;
  }

  if(minus){
    const item = cart.find(x=>x.key===minus.dataset.minus);
    if(item && --item.qty<=0){
      cart = cart.filter(x=>x!==item);
    }
  }

  if(remove){
    cart = cart.filter(x=>x.key!==remove.dataset.remove);
  }

  renderCart();
});

// ENVIAR PEDIDO PELO WHATSAPP
$("#deliveryForm").addEventListener("submit",e=>{
  e.preventDefault();

  if(!cart.length){
    toast("Adicione produtos ao carrinho antes de enviar.");
    return;
  }

  const data = new FormData(e.currentTarget);
  const total = cart.reduce((a,x)=>a+x.price*x.qty,0);

  const items = cart.map(i=>
    `• ${i.qty}x ${i.name}${i.size?" ("+i.size+")":""} — ${money(i.price*i.qty)}`
  ).join("\n");

  const message = `Olá! Quero fazer um pedido na Pizzaria e Restaurante da Júlia.

${items}

TOTAL DOS PRODUTOS: ${money(total)}

Nome: ${data.get("name")}
Telefone: ${data.get("phone")}
Endereço: ${data.get("address")}
Observações: ${data.get("notes")||"Nenhuma"}

Aguardo confirmação do pedido e do valor da entrega.`;

  window.open(
    "https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(message),
    "_blank"
  );
});

$("#year").textContent = new Date().getFullYear();

// PAINEL ADMINISTRATIVO
const modal = $("#adminModal");

$("#openAdmin").addEventListener("click",()=>{
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
});

function closeAdmin(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}

$("#closeAdmin").addEventListener("click",closeAdmin);

modal.addEventListener("click",e=>{
  if(e.target===modal) closeAdmin();
});

// LOGIN
$("#loginForm").addEventListener("submit",e=>{
  e.preventDefault();

  if($("#adminPassword").value!==ADMIN_PASSWORD){
    $("#loginError").textContent = "Senha incorreta.";
    return;
  }

  $("#loginError").textContent = "";
  $("#loginView").hidden = true;
  $("#adminView").hidden = false;
  $("#adminPassword").value = "";
  renderAdmin();
});

$("#logoutBtn").addEventListener("click",()=>{
  $("#adminView").hidden = true;
  $("#loginView").hidden = false;
  toast("Você saiu do painel.");
});

// CAMPOS DO FORMULÁRIO
function updateFields(){
  const pizza = $("#productForm [name='category']").value==="pizza";
  $("#pizzaPrices").hidden = !pizza;
  $("#drinkPriceField").hidden = pizza;
}

$("#productForm [name='category']").addEventListener("change",updateFields);

function clearForm(){
  const f = $("#productForm");
  f.reset();
  f.elements.id.value = "";
  editingId = null;
  $("#saveProductBtn").textContent = "Salvar produto";
  updateFields();
}

$("#clearFormBtn").addEventListener("click",clearForm);

// ADICIONAR E EDITAR
$("#productForm").addEventListener("submit",e=>{
  e.preventDefault();

  const f = e.currentTarget;
  const d = new FormData(f);
  const category = d.get("category");

  const p = {
    id:editingId || "x"+Date.now(),
    name:d.get("name").trim(),
    category,
    description:d.get("description").trim(),
    available:true
  };

  if(category==="pizza"){
    p.prices = {};

    for(const s of ["P","M","G","F"]){
      p.prices[s] = Number(d.get(s));

      if(!Number.isFinite(p.prices[s]) || p.prices[s]<0){
        return toast("Confira os preços dos tamanhos.");
      }
    }
  }else{
    p.price = Number(d.get("price"));

    if(!Number.isFinite(p.price) || p.price<0){
      return toast("Informe um preço válido.");
    }
  }

  const index = products.findIndex(x=>x.id===p.id);

  if(index>=0){
    p.available = products[index].available;
    products[index] = p;
  }else{
    products.push(p);
  }

  saveProducts();
  clearForm();
  renderProducts();
  renderAdmin();
  toast("Produto salvo com sucesso!");
});

// LISTAGEM ADMINISTRATIVA
function renderAdmin(){
  $("#adminProducts").innerHTML = products.map(p=>`
    <div class="admin-row">
      <div>
        <strong>${esc(p.name)}</strong>
        <small>
          ${p.category==="pizza"
            ? `P ${money(p.prices.P)} · M ${money(p.prices.M)} · G ${money(p.prices.G)} · F ${money(p.prices.F)}`
            : money(p.price)}
          · ${p.available?"Disponível":"Indisponível"}
        </small>
      </div>
      <div class="row-actions">
        <button data-edit="${p.id}">Editar</button>
        <button data-toggle="${p.id}">${p.available?"Pausar":"Ativar"}</button>
        <button class="delete" data-delete="${p.id}">Excluir</button>
      </div>
    </div>
  `).join("");
}

// EDITAR, PAUSAR E EXCLUIR
$("#adminProducts").addEventListener("click",e=>{
  const edit = e.target.closest("[data-edit]");
  const toggle = e.target.closest("[data-toggle]");
  const del = e.target.closest("[data-delete]");

  if(edit){
    const p = products.find(x=>x.id===edit.dataset.edit);
    const f = $("#productForm");

    editingId = p.id;
    f.elements.id.value = p.id;
    f.elements.name.value = p.name;
    f.elements.category.value = p.category;
    f.elements.description.value = p.description||"";

    if(p.category==="pizza"){
      for(const s of ["P","M","G","F"]){
        f.elements[s].value = p.prices[s];
      }
    }else{
      f.elements.price.value = p.price;
    }

    updateFields();
    $("#saveProductBtn").textContent = "Atualizar produto";
    f.scrollIntoView({behavior:"smooth"});
  }

  if(toggle){
    const p = products.find(x=>x.id===toggle.dataset.toggle);
    p.available = !p.available;
    saveProducts();
    renderProducts();
    renderAdmin();
  }

  if(del){
    if(!confirm("Excluir este produto do cardápio?")) return;

    products = products.filter(x=>x.id!==del.dataset.delete);
    cart = cart.filter(x=>x.id!==del.dataset.delete);

    saveProducts();
    renderProducts();
    renderCart();
    renderAdmin();
    toast("Produto removido.");
  }
});

// INICIAR
updateFields();
renderProducts();
renderCart();