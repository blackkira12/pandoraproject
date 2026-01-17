(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const u={en:{nav:{home:"Home",screener:"Dev Screener",quiz:"Parent Quiz",lang:"Bahasa Indonesia"},hero:{title:"Unlock Potential.",subtitle:"The Pandora Project",desc:"Money buys comfort, not character. <br> Evidence-based parenting strategies for the next generation of Indonesian leaders.",btnScreener:"Check Milestones (Denver II)",btnQuiz:"Take the Quiz"},screener:{title:"Developmental Checkpoints (Denver II)",desc:"These are scientific benchmarks, not grades. Gaps here indicate a need for stimulation, not panic.",milestones:"Milestones",domains:{"Personal-Social":"Personal-Social","Fine Motor":"Fine Motor",Language:"Language","Gross Motor":"Gross Motor"},critical:"Critical",items:{"ps-1":"Smiles spontaneously","ps-2":"Regards face","fm-1":"Follows past midline","lg-1":"Responds to bell/sound","gm-1":"Lifts head","ps-3":"Feeds self (cracker)","fm-2":"Passes cube hand to hand","lg-2":"Dada/Mama (non-specific)","gm-2":"Sits without support","gm-3":"Stands holding on","ps-4":"Plays ball with examiner","fm-3":"Scribbles","lg-3":"3 words other than Mama/Dada","gm-4":"Walks well","ps-5":"Washes and dries hands","fm-4":"Tower of 4 cubes","lg-4":"Knows 2 adjectives","gm-5":"Jumps in place","ps-6":"Dresses self without supervision","fm-5":"Copies cross (+)","lg-5":"Defines 5 words","gm-6":"Balances on 1 foot (5 secs)"}},quiz:{scenario:"Scenario",yourStyle:"Your Style Archetype",globalContext:"Global Context:",retake:"Retake Quiz",questions:[{text:"Your 4-year-old refuses to eat their vegetables at dinner. What do you do?",options:["Feed them yourself or blend it into milk so they eat it. (Protection)","Force them to stay at the table until they finish. (Control)","Explain why it's healthy, offer a choice (e.g., 'Broccoli or Carrots?'), but don't force. (Guidance)"]},{text:"Your child trips and falls while running. They are crying but not bleeding.",options:["Rush to them, pick them up, and blame the floor. 'Naughty floor!'","Tell them to stop crying immediately. 'Boys don't cry.'","Acknowledge the pain ('That hurt, didn't it?') then encourage them to stand up. 'You're okay.'"]},{text:"It's time to get ready for school. Your 5-year-old is playing.",options:["Have the nanny dress them while they keep playing.","Yell that they are late and physically dress them roughly.","Give a 5-minute warning, then calmly explain that playing time is over."]}],results:{authoritative:{title:"The Lighthouse (Authoritative)",desc:"You balance High Warmth with High Standards. This is the global gold standard.",comps:"Similar to the best practices in the **USA** (Self-expression) and modern **Japan** (Independence). You are raising a self-reliant leader."},permissive:{title:"The Concierge (Permissive)",desc:"High Warmth, Low Standards. You might be doing too much *for* your child.",comps:"Common in affluent **Indonesia**. Compare to **Japan**: A 3-year-old there carries their own bag. Try stepping back to let them fail safely."},authoritarian:{title:"The Commander (Authoritarian)",desc:"Low Warmth, High Standards. You demand obedience, but at what cost?",comps:"Historically common in **China**, but modern research warns this stifles emotional intelligence. **US** research shows this can lead to rebellion."}}},comparison:{title:'The "Privilege" Trap',desc:"Affluence often removes the very friction children need to grow. <br> Compare a typical day for a 4-year-old:",indoLabel:"🇮🇩 Jakarta (Affluent)",japanLabel:"🇯🇵 Tokyo",lesson:'<strong>The Lesson:</strong> Do not buy their way out of struggle.<br> <span style="color: var(--color-primary);">Struggle is where the neurons grow.</span>',scenarios:[{title:"7:00 AM: Getting Ready",indo:{action:"Nanny dresses the child, packs the bag, and carries the child to the car.",outcome:"Zero friction, but zero motor skills practice."},japan:{action:"Child wakes up, changes clothes independently, packs bento/books.",outcome:"Building Executive Function (Planning) + Fine Motor skills."}},{title:"7:45 AM: The Commute",indo:{action:"Driven in private car. Child watches iPad/YouTube on the way.",outcome:"Sedentary. High dopamine spike before school."},japan:{action:"Walks to school (or bus/train). Navigates sidewalks safely.",outcome:"Daily 20m exercise. Spatial awareness. Independence."}},{title:"12:00 PM: Lunch Time",indo:{action:"Nanny feeds the child to ensure they 'finish everything'.",outcome:"Learns that eating is a transactional task, not a bodily cue."},japan:{action:"Sets the table, serves peers (Kyushoku), cleans up after eating.",outcome:"Responsibility, Community Service, Motor coordination."}}]}},id:{nav:{home:"Beranda",screener:"Deteksi Tumbuh Kembang",quiz:"Kuis Orang Tua",lang:"English"},hero:{title:"Buka Potensi Mereka.",subtitle:"The Pandora Project",desc:"Uang membeli kenyamanan, bukan karakter. <br> Strategi parenting berbasis bukti untuk generasi pemimpin Indonesia berikutnya.",btnScreener:"Cek Milestones (Denver II)",btnQuiz:"Ikuti Kuis"},screener:{title:"Titik Cek Perkembangan (Denver II)",desc:"Ini adalah patokan ilmiah, bukan nilai rapot. Kesenjangan di sini menunjukkan kebutuhan stimulasi, bukan kepanikan.",milestones:"Milestones",domains:{"Personal-Social":"Personal-Sosial","Fine Motor":"Motorik Halus",Language:"Bahasa","Gross Motor":"Motorik Kasar"},critical:"Kritis",items:{"ps-1":"Tersenyum spontan","ps-2":"Menatap wajah","fm-1":"Mengikuti lewat garis tengah","lg-1":"Merespons bel/suara","gm-1":"Mengangkat kepala","ps-3":"Makan sendiri (biskuit)","fm-2":"Memindah kubus antar tangan","lg-2":"Dada/Mama (tidak spesifik)","gm-2":"Duduk tanpa pegangan","gm-3":"Berdiri berpegangan","ps-4":"Main bola dengan pemeriksa","fm-3":"Mencoret-coret","lg-3":"3 kata selain Mama/Dada","gm-4":"Berjalan dengan baik","ps-5":"Mencuci dan mengeringkan tangan","fm-4":"Menara 4 kubus","lg-4":"Tahu 2 kata sifat","gm-5":"Melompat di tempat","ps-6":"Berpakaian sendiri tanpa bantuan","fm-5":"Meniru tanda tambah (+)","lg-5":"Mendefinisikan 5 kata","gm-6":"Berdiri 1 kaki (5 detik)"}},quiz:{scenario:"Skenario",yourStyle:"Arketipe Gaya Anda",globalContext:"Konteks Global:",retake:"Ulangi Kuis",questions:[{text:"Anak 4 tahun Anda menolak makan sayur saat makan malam. Apa yang Anda lakukan?",options:["Suapi mereka sendiri atau blender ke dalam susu supaya termakan. (Perlindungan)","Paksa mereka duduk di meja sampai habis. (Kontrol)","Jelaskan kenapa sehat, beri pilihan (misal: 'Brokoli atau Wortel?'), tapi jangan paksa. (Bimbingan)"]},{text:"Anak Anda tersandung dan jatuh saat berlari. Menangis tapi tidak berdarah.",options:["Lari ke mereka, gendong, dan salahkan lantainya. 'Lantai nakal!'","Suruh berhenti menangis segera. 'Laki-laki tidak boleh nangis.'","Akui rasa sakitnya ('Sakit ya?'), lalu dorong mereka untuk berdiri. 'Kamu oke kok.'"]},{text:"Waktunya siap-siap sekolah. Anak 5 tahun Anda masih asyik main.",options:["Biarkan nanny memakaikan baju sambil mereka tetap main.","Teriak kalau sudah telat dan pakaikan baju dengan kasar.","Beri peringatan 5 menit, lalu jelaskan dengan tenang bahwa waktu main habis."]}],results:{authoritative:{title:"Sang Mercusuar (Authoritative)",desc:"Anda menyeimbangkan Kehangatan Tinggi dengan Standar Tinggi. Ini adalah standar emas global.",comps:"Mirip dengan praktik terbaik di **AS** (Ekspresi Diri) dan **Jepang** modern (Kemandirian). Anda membesarkan pemimpin yang mandiri."},permissive:{title:"Sang Concierge (Permissive)",desc:"Kehangatan Tinggi, Standar Rendah. Anda mungkin melakukan terlalu banyak hal *untuk* anak.",comps:"Umum di kalangan **menengah atas Indonesia**. Bandingkan dengan **Jepang**: Anak 3 tahun di sana bawa tas sendiri. Cobalah mundur sedikit agar mereka belajar gagal dengan aman."},authoritarian:{title:"Sang Komandan (Authoritarian)",desc:"Kehangatan Rendah, Standar Tinggi. Anda menuntut ketaatan, tapi dengan harga apa?",comps:"Secara historis umum di **China**, tapi riset modern memperingatkan ini menghambat kecerdasan emosi. Riset **AS** menunjukkan ini bisa memicu pemberontakan."}}},comparison:{title:'Jebakan "Privilege"',desc:"Kekayaan seringkali menghilangkan gesekan/kesulitan yang justru dibutuhkan anak untuk tumbuh. <br> Bandingkan keseharian anak 4 tahun:",indoLabel:"🇮🇩 Jakarta (Affluent)",japanLabel:"🇯🇵 Tokyo",lesson:'<strong>Pelajaran:</strong> Jangan beli jalan keluar dari kesulitan.<br> <span style="color: var(--color-primary);">Kesulitan adalah tempat neuron berkembang.</span>',scenarios:[{title:"07:00: Siap-siap",indo:{action:"Nanny memakaikan baju, menyiapkan tas, dan menggendong ke mobil.",outcome:"Nol gesekan, tapi nol latihan motorik."},japan:{action:"Bangun sendiri, ganti baju sendiri, siapkan bento/buku.",outcome:"Membangun Fungsi Eksekutif (Perencanaan) + Motorik Halus."}},{title:"07:45: Perjalanan",indo:{action:"Diantar mobil pribadi. Nonton iPad/YouTube sepanjang jalan.",outcome:"Sedenter. Lonjakan dopamin tinggi sebelum sekolah."},japan:{action:"Jalan kaki ke sekolah (atau bus/kereta). Navigasi trotoar.",outcome:"Olahraga 20 menit/hari. Kesadaran spasial. Kemandirian."}},{title:"12:00: Makan Siang",indo:{action:"Disuapi nanny biar 'pasti habis'.",outcome:"Belajar bahwa makan adalah tugas transaksional, bukan sinyal tubuh."},japan:{action:"Siapkan meja, melayani teman (Kyushoku), bersih-bersih setelah makan.",outcome:"Tanggung jawab, Pelayanan Komunitas, Koordinasi motorik."}}]}}},y=[{ageRange:"0-6 Months",items:[{id:"ps-1",critical:!1},{id:"ps-2",critical:!1},{id:"fm-1",domain:"Fine Motor",critical:!0},{id:"lg-1",domain:"Language",critical:!0},{id:"gm-1",domain:"Gross Motor",critical:!0}]},{ageRange:"6-12 Months",items:[{id:"ps-3",critical:!1},{id:"fm-2",critical:!1},{id:"lg-2",critical:!1},{id:"gm-2",domain:"Gross Motor",critical:!0},{id:"gm-3",domain:"Gross Motor",critical:!0}]},{ageRange:"1-2 Years",items:[{id:"ps-4",critical:!1},{id:"fm-3",critical:!1},{id:"lg-3",domain:"Language",critical:!0},{id:"gm-4",domain:"Gross Motor",critical:!0}]},{ageRange:"2-4 Years",items:[{id:"ps-5",critical:!1},{id:"fm-4",domain:"Fine Motor",critical:!0},{id:"lg-4",domain:"Language",critical:!1},{id:"gm-5",domain:"Gross Motor",critical:!0}]},{ageRange:"4-6 Years",items:[{id:"ps-6",critical:!0},{id:"fm-5",domain:"Fine Motor",critical:!0},{id:"lg-5",domain:"Language",critical:!1},{id:"gm-6",domain:"Gross Motor",critical:!1}]}];function x(r="en"){const a=u[r].screener,n=document.createElement("div");n.className="screener-container",n.innerHTML=`
    <h2 style="margin-bottom: 2rem;">${a.title}</h2>
    <p style="margin-bottom: 2rem; color: var(--color-text-muted);">
      ${a.desc}
    </p>
  `;const t=document.createElement("div");t.className="age-tabs",t.style.display="flex",t.style.gap="1rem",t.style.marginBottom="2rem",t.style.flexWrap="wrap";const e=document.createElement("div");return e.className="glass-card",y.forEach((i,s)=>{const o=document.createElement("button");o.textContent=i.ageRange,o.className="btn-tab",o.style.padding="0.5rem 1rem",o.style.borderRadius="20px",o.style.border="1px solid var(--color-primary)",o.style.background=s===0?"var(--color-primary)":"transparent",o.style.color="white",o.style.cursor="pointer",o.onclick=()=>{Array.from(t.children).forEach(k=>k.style.background="transparent"),o.style.background="var(--color-primary)",f(i,e,a)},t.appendChild(o)}),n.appendChild(t),n.appendChild(e),f(y[0],e,a),n}function f(r,a,n){a.innerHTML=`
    <h3 style="margin-bottom: 1.5rem;">${r.ageRange} ${n.milestones}</h3>
    <div style="display: grid; gap: 1rem; text-align: left;">
      ${r.items.map(t=>{t.domain;const e=n.items[t.id];return`
        <div class="milestone-item" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px;">
          <input type="checkbox" id="${t.id}" style="width: 20px; height: 20px; accent-color: var(--color-secondary);">
          <div>
            <div style="font-weight: 600;">${e}</div>
            <div style="font-size: 0.8em; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">
              ${t.critical?`<span style="color: var(--color-accent); margin-left: 0.5rem;">● ${n.critical}</span>`:""}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>
  `}function M(r="en"){const a=u[r].quiz,n=a.questions,t=document.createElement("div");t.className="glass-card";let e=0,i={authoritative:0,permissive:0,authoritarian:0};const s=["permissive","authoritarian","authoritative"],o=()=>{if(e>=n.length){k();return}const p=n[e];t.innerHTML=`
      <div style="text-align: left;">
        <span style="color: var(--color-secondary); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em;">${a.scenario} ${e+1}/${n.length}</span>
        <h3 style="margin: 1rem 0 2rem; font-size: 1.5rem;">${p.text}</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${p.options.map((c,l)=>`
            <button class="quiz-btn" data-idx="${l}" style="
              text-align: left;
              padding: 1.5rem;
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.1);
              color: white;
              border-radius: 12px;
              cursor: pointer;
              transition: all 0.2s;
              font-family: var(--font-body);
              font-size: 1rem;
            ">
              ${c}
            </button>
          `).join("")}
        </div>
      </div>
    `,t.querySelectorAll(".quiz-btn").forEach(c=>{c.onclick=l=>{const h=s[l.currentTarget.dataset.idx];i[h]++,e++,o()},c.onmouseenter=l=>l.currentTarget.style.background="rgba(255,255,255,0.1)",c.onmouseleave=l=>l.currentTarget.style.background="rgba(255,255,255,0.05)"})},k=()=>{const p=Object.keys(i).reduce((l,h)=>i[l]>i[h]?l:h),c=a.results[p];t.innerHTML=`
      <div style="text-align: center; animation: fadeIn 0.8s ease;">
        <h3 style="color: var(--color-secondary);">${a.yourStyle}</h3>
        <h1 style="font-size: 3rem; margin: 1rem 0; background: var(--gradient-main); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          ${c.title}
        </h1>
        <p style="font-size: 1.25rem; margin-bottom: 2rem;">${c.desc}</p>
        
        <div style="background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 16px; border-left: 4px solid var(--color-primary); text-align: left;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 0.5rem;">${a.globalContext}</strong>
          ${c.comps}
        </div>
        
        <button class="btn-primary" onclick="location.reload()" style="margin-top: 2rem;">${a.retake}</button>
      </div>
    `};return o(),t}function w(r="en"){const a=u[r].comparison,n=document.createElement("div");n.className="glass-card",n.style.marginTop="3rem",n.style.textAlign="left",n.innerHTML=`
    <h2 style="margin-bottom: 2rem; text-align: center;">${a.title}</h2>
    <p style="text-align: center; color: var(--color-text-muted); margin-bottom: 2rem;">
      ${a.desc}
    </p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 1rem;">
      <div style="text-align: center; color: var(--color-accent); font-weight: 800;">${a.indoLabel}</div>
      <div style="text-align: center; color: var(--color-secondary); font-weight: 800;">${a.japanLabel}</div>
    </div>
  `,a.scenarios.forEach(e=>{const i=document.createElement("div");i.style.cssText=`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 1.5rem 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    `;const s=document.createElement("div");s.innerHTML=`
      <div style="font-size: 0.9em; color: var(--color-text-muted); margin-bottom: 0.5rem;">${e.title}</div>
      <div style="margin-bottom: 0.5rem;">${e.indo.action}</div>
      <div style="color: var(--color-accent); font-size: 0.85em; font-style: italic;">⚠️ ${e.indo.outcome}</div>
    `;const o=document.createElement("div");o.innerHTML=`
      <div style="font-size: 0.9em; color: var(--color-text-muted); margin-bottom: 0.5rem;">${e.title}</div>
      <div style="margin-bottom: 0.5rem;">${e.japan.action}</div>
      <div style="color: var(--color-secondary); font-size: 0.85em; font-weight: 600;">💪 ${e.japan.outcome}</div>
    `,i.appendChild(s),i.appendChild(o),n.appendChild(i)});const t=document.createElement("div");return t.style.textAlign="center",t.style.marginTop="2rem",t.style.paddingTop="1rem",t.style.borderTop="1px solid rgba(255,255,255,0.1)",t.innerHTML=`
    <p style="font-size: 1.1rem;">
      ${a.lesson}
    </p>
  `,n.appendChild(t),n}const b=document.querySelector("#app"),S={home:T,screener:x,quiz:M};let d="home",m="en";function v(){const r=u[m].nav,a=document.createElement("nav");a.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  `,[{id:"home",text:r.home},{id:"screener",text:r.screener},{id:"quiz",text:r.quiz}].forEach(e=>{const i=document.createElement("button");i.textContent=e.text,i.style.cssText=`
      background: transparent;
      border: none;
      color: ${d===e.id?"var(--color-secondary)":"var(--color-text-muted)"};
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid ${d===e.id?"var(--color-secondary)":"transparent"};
      transition: all 0.3s;
    `,i.onclick=()=>{d!==e.id&&(d=e.id,g())},a.appendChild(i)});const t=document.createElement("button");return t.textContent="🌐 "+(m==="en"?"ID":"EN"),t.style.cssText=`
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    margin-left: 1rem;
  `,t.onclick=()=>{m=m==="en"?"id":"en",g()},a.appendChild(t),a}function T(r){const a=u[r].hero,n=document.createElement("div");n.className="hero-section",n.innerHTML=`
    <div class="glass-card float-anim">
      <h1>
        <span class="serif-italic">${a.subtitle}</span>
        ${a.title}
      </h1>
      <p style="font-size: 1.5rem; max-width: 60ch; color: var(--color-text-muted); margin: 0 auto 2rem;">
        ${a.desc}
      </p>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn-primary" id="start-screener">${a.btnScreener}</button>
        <button class="btn-primary" id="start-quiz" style="background: transparent; border: 1px solid var(--color-primary); box-shadow: none;">${a.btnQuiz}</button>
      </div>
    </div>
  `;const t=w(r);return n.appendChild(t),setTimeout(()=>{n.querySelector("#start-screener").onclick=()=>{d="screener",g()},n.querySelector("#start-quiz").onclick=()=>{d="quiz",g()}},0),n}function g(){u[m].nav;const r=b.querySelector("nav");r?r.replaceWith(v()):b.appendChild(v());const a=b.querySelector(".route-content"),n=()=>{window.scrollTo({top:0,behavior:"smooth"});const t=S[d](m),e=document.createElement("div");e.className="route-content page-enter",e.style.width="100%",typeof t=="string"?e.innerHTML=t:e.appendChild(t),b.appendChild(e),requestAnimationFrame(()=>{e.classList.remove("page-enter"),e.classList.add("page-enter-active")})};a?(a.classList.remove("page-enter-active"),a.classList.add("page-exit-active"),a.addEventListener("transitionend",()=>{a.remove(),n()},{once:!0})):n()}g();
