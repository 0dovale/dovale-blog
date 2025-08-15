// ==========================
// Glitter pequenas de fundo
// ==========================
document.addEventListener('DOMContentLoaded', function() {
  const glitterContainer = document.querySelector('.fixed.inset-0');
  if(glitterContainer) {
    for (let i = 0; i < 30; i++) {
      const el = document.createElement('div');
      el.className = 'absolute glitter';
      el.style.width = `${Math.random() * 4 + 2}px`;
      el.style.height = el.style.width;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.animationDelay = `${Math.random() * 5}s`;
      el.style.opacity = Math.random() * 0.5 + 0.1;
      glitterContainer.appendChild(el);
    }
  }
});

// ==========================
// POSTS DEMO
// ==========================
const samplePosts = [
  { id:1, title:"NOVO MOD MENU PRA SA-MP MOBILE!!!🎉🎉", image:"imagens/modmenusampmobile.jpg", excerpt:'<a href="https://youtu.be/gwk73ZJLffU?si=u-xfDenIXCgWm6Ch" target="_blank" class="text-blue-400 underline">BAIXAR MOD MENU</a>' },
  { id:2, title:"O mais NOVO EXECUTOR de ROBL0X pra PC! 🎉🎉", image:"imagens/xenoexecutorroblox.jpg", excerpt:'<a href="https://xeno-executor.org/" target="_blank" class="text-blue-400 underline">BAIXAR XENO EXECUTOR</a>' },
  { id:3, title:"Executor Script de Roblox 2024 (✅PC) (❌Android)", image:"imagens/jjsploitexecutorroblox.jpg", excerpt:'<a href="https://wearedevs.net/d/JJSploit" target="_blank" class="text-blue-400 underline">BAIXAR JJSPLOIT EXECUTOR</a>' },
  { id:4, title:"💫 Como resgatar o Discord Nitro Grátis do Opera GX!!! [Expirado]", image:"imagens/discordnitrooperagx.jpg", excerpt:'<a href="https://www.opera.com/gx/discord-nitro" target="_blank" class="text-blue-400 underline">OBTER DISCORD NITRO</a>' },
];

const postsContainer = document.getElementById('posts-container');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const loadMoreContainer = document.getElementById('load-more-container');
const loadMoreBtn = document.getElementById('load-more-btn');
let currentPage = 1;
const postsPerPage = 6;

// ==========================
// Função para formatar números
// ==========================
function nfmt(n){ return new Intl.NumberFormat('pt-BR').format(n); }

// Função para atualizar cores de posts e botão conforme tema
function updatePostColors() {
  const isLight = document.body.classList.contains('bg-gray-100');
  
  // Atualiza posts dinamicamente
  document.querySelectorAll('#posts-container .post-card').forEach(card => {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    const info = card.querySelectorAll('.flex span');

    if(isLight) {
      h3.style.color = '#000';
      p.style.color = 'rgba(0,0,0,0.8)';
      info.forEach(el => el.style.color = 'rgba(0,0,0,0.6)');
    } else {
      h3.style.color = '#fff';
      p.style.color = 'rgba(255,255,255,0.8)';
      info.forEach(el => el.style.color = 'rgba(255,255,255,0.6)');
    }
  });

  // Atualiza botão "Ver Mais"
  const btn = document.querySelector('#load-more-btn');
  if(btn) btn.style.color = isLight ? '#000' : '#fff';
}

// Renderiza posts com cores atualizadas
function renderPosts(page = 1) {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = samplePosts.slice(0, endIndex);
  if(!postsContainer) return;
  postsContainer.innerHTML = '';

  postsToShow.forEach(post => {
    const e = document.createElement('div');
    e.className = 'post-card glass-card rounded-3xl overflow-hidden transition duration-300 hover:cursor-pointer';
    e.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transition duration-500 hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${post.title}</h3>
        <p class="mb-4">${post.excerpt}</p>
      </div>`;
    postsContainer.appendChild(e);
  });

  // Mostrar/ocultar botão "Ver Mais"
  if(loadMoreContainer) {
    loadMoreContainer.classList.toggle('hidden', samplePosts.length <= endIndex);
  }

  // Atualiza cores de todos os elementos após renderizar
  updatePostColors();
}

// Atualiza cores quando alterna tema
if(themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTimeout(updatePostColors, 50); // timeout garante que o toggle já aplicou as classes
  });
}

// Atualiza cores ao carregar a página
document.addEventListener('DOMContentLoaded', updatePostColors);


if (loadMoreBtn) loadMoreBtn.addEventListener('click', () => { currentPage++; renderPosts(currentPage); });
if (mobileMenuButton) mobileMenuButton.addEventListener('click', () => { mobileMenu?.classList.toggle('hidden'); });

// ==========================
// Alternar tema (claro/escuro)
// ==========================
function updateYouTubeTextColors() {
  const isLight = document.body.classList.contains('bg-gray-100');

  const title = document.getElementById('yt-title');
  if(title) title.style.color = isLight ? '#000' : '#fff';

  const desc = document.getElementById('yt-desc');
  if(desc) desc.style.color = isLight ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)';

  document.querySelectorAll('#yt-system .yt-stat-label').forEach(el => {
    el.style.color = isLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)';
  });
  document.querySelectorAll('#yt-system .yt-stat-value').forEach(el => {
    el.style.color = isLight ? '#000' : '#fff';
  });
  document.querySelectorAll('#yt-system .yt-video-card .meta p').forEach(el => {
    el.style.color = isLight ? '#000' : '#fff';
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const footer = document.querySelector('footer');

    document.body.classList.toggle('bg-gray-100');
    document.body.classList.toggle('text-gray-900');

    if (document.body.classList.contains('bg-gray-100')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      document.body.classList.remove('bg-gradient-to-br','from-gray-900','via-purple-900','to-pink-900');
      document.body.classList.add('bg-gradient-to-br','from-gray-100','via-purple-50','to-violet-50');

      document.querySelectorAll('.glass-card').forEach(c => { 
        c.classList.remove('text-white'); 
        c.classList.add('text-gray-900'); 
      });

      if (footer) {
        footer.classList.remove('bg-gray-800','text-white');
        footer.classList.add('bg-white','text-gray-900');
      }
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      document.body.classList.remove('bg-gradient-to-br','from-gray-100','via-purple-50','to-violet-50');
      document.body.classList.add('bg-gradient-to-br','from-gray-900','via-purple-900','to-pink-900');

      document.querySelectorAll('.glass-card').forEach(c => { 
        c.classList.remove('text-gray-900'); 
        c.classList.add('text-white'); 
      });

      if (footer) {
        footer.classList.remove('bg-white','text-gray-900');
        footer.classList.add('bg-gray-800','text-white');
      }
    }

    updateYouTubeTextColors();
  });
}

// ==========================
// YouTube API
// ==========================
const API_KEY = "AIzaSyC667lPiBzI0soMSWDQUZcgcTEHdlhJ4k0"; // Coloque sua API key aqui
const CHANNEL_HANDLE = "@dovalexyz";
const AUTO_REFRESH_MIN = 10; // minutos

const elAvatar = document.getElementById("yt-avatar");
const elTitle = document.getElementById("yt-title");
const elDesc = document.getElementById("yt-desc");
const elSubs = document.getElementById("yt-subs");
const elViews = document.getElementById("yt-views");
const elVideosCount = document.getElementById("yt-videos");
const elVideosList = document.getElementById("yt-videos-list");
const btnRefresh = document.getElementById("yt-refresh");
let uploadsPlaylistId = null;

async function fetchChannelData() {
  const url = new URL("https://www.googleapis.com/youtube/v3/channels");
  url.search = new URLSearchParams({
    part: "snippet,statistics,contentDetails",
    forHandle: CHANNEL_HANDLE.replace(/^@/,""),
    key: API_KEY
  });
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok || !data.items || !data.items.length) throw new Error("Falha ao obter dados do canal.");

  const ch = data.items[0];
  uploadsPlaylistId = ch.contentDetails?.relatedPlaylists?.uploads || null;

  if (elAvatar) elAvatar.src = ch.snippet?.thumbnails?.high?.url || ch.snippet?.thumbnails?.default?.url || "";
  if (elTitle) elTitle.textContent = ch.snippet?.title || CHANNEL_HANDLE;
  if (elDesc) elDesc.textContent = ch.snippet?.description || "";
  if (elSubs) elSubs.textContent = ch.statistics?.hiddenSubscriberCount ? "Ocultos" : nfmt(ch.statistics?.subscriberCount || 0);
  if (elViews) elViews.textContent = nfmt(ch.statistics?.viewCount || 0);
  if (elVideosCount) elVideosCount.textContent = nfmt(ch.statistics?.videoCount || 0);

  updateYouTubeTextColors();
}

async function fetchRecentVideos(max = 6) {
  if (!uploadsPlaylistId || !elVideosList) return;
  const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  url.search = new URLSearchParams({
    part: "snippet,contentDetails",
    playlistId: uploadsPlaylistId,
    maxResults: String(max),
    key: API_KEY
  });
  const res = await fetch(url);
  const data = await res.json();
  if (!data.items) return;

  elVideosList.innerHTML = "";
  data.items.forEach(item => {
    const vidId = item?.contentDetails?.videoId || item?.snippet?.resourceId?.videoId;
    if (!vidId) return;
    const title = item.snippet?.title || "Vídeo";
    const thumb = (item.snippet?.thumbnails?.maxres?.url) ||
                  (item.snippet?.thumbnails?.high?.url) ||
                  (item.snippet?.thumbnails?.medium?.url) ||
                  (item.snippet?.thumbnails?.default?.url) || "";
    const url = `https://www.youtube.com/watch?v=${vidId}`;
    const card = document.createElement("a");
    card.href = url;
    card.target = "_blank";
    card.rel = "noopener";
    card.className = "yt-video-card glass-card";
    card.innerHTML = `
      <div class="thumb"><img src="${thumb}" alt="${title}"></div>
      <div class="meta"><p class="line-clamp-2">${escapeHtml(title)}</p></div>`;
    elVideosList.appendChild(card);
  });

  updateYouTubeTextColors();
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[m]);
}

async function loadYouTubeInfo(){
  try {
    await fetchChannelData();
    await fetchRecentVideos();
  } catch (e) { console.error(e); }
}

if (btnRefresh) btnRefresh.addEventListener("click", loadYouTubeInfo);
document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
  loadYouTubeInfo();
  setInterval(loadYouTubeInfo, AUTO_REFRESH_MIN * 60 * 1000);
});
