// MOBILE MENU
const humBtn = document.querySelector('#mobile_menu_links');
const mobileMenu = document.querySelector('#mobile_nemu');
humBtn.addEventListener('click', () => {
  document.querySelector('#hamburger').classList.toggle('hidden');
  document.querySelector('#x_icon').classList.toggle('hidden');
  document.querySelector('#mobile_nemu').classList.toggle('displayhiddenNav');
});

mobileMenu.addEventListener('click', () => {
  if (mobileMenu.classList.contains('displayhiddenNav')) {
    document.querySelector('#hamburger').classList.remove('hidden');
    document.querySelector('#x_icon').classList.add('hidden');
    mobileMenu.classList.remove('displayhiddenNav');
  }
});

// ADD SPEAKERS
const speaker = [
  {
    id: 'speaker_item_1',
    thumbnail: 'images/speaker_01 1.svg',
    img_alt: 'second speaker : Yochai Benkler',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    quote: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    id_profession: 'speaker_Item_prof_1',
  },
  {
    id: 'speaker_item_2',
    thumbnail: 'images/speaker_02 2.svg',
    img_alt: 'second speaker : SohYeong Noh',
    name: 'SohYeong Noh',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    quote: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 'speaker_item_3',
    thumbnail: 'images/speaker_3.jpg',
    img_alt: 'second speaker : Wifried Muyisa',
    name: 'Wifried Muyisa',
    profession: 'CEO of Paniel Place',
    quote: 'My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had -- everyday I’m learning something new',
  },
  {
    id: 'speaker_item_4',
    thumbnail: 'images/speaker_8.jpg',
    img_alt: 'second speaker : Safi Mitavo',
    name: 'Safi Mitavo',
    profession: 'business woman',
    quote: 'It’s fine to celebrate success but it is more important to heed the lessons of failure.',
  },
  {
    id: 'speaker_item_5',
    thumbnail: 'images/speaker_5.jpg',
    img_alt: 'second speaker : Justin Fimbo',
    name: 'Justin Fimbo',
    profession: 'Software Developper at ISSO net',
    quote: "One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you.",
  },
  {
    id: 'speaker_item_6',
    thumbnail: 'images/speaker_7b.jpg',
    img_alt: 'second speaker : Naomi Mutesi',
    name: 'Naomi Mutesi',
    profession: 'Data Manager at Snico',
    quote: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
  },
  {
    id: 'speaker_item_7',
    thumbnail: 'images/speaker_6.jpg',
    img_alt: 'second speaker : Josh Ekole',
    name: 'Josh Ekole',
    profession: 'Singer',
    quote: 'Success is walking from failure to failure with no loss of enthusiasm',
  },
  {
    id: 'speaker_item_8',
    thumbnail: 'images/speaker_4.jpg',
    img_alt: 'second speaker :Bruno Kambere Yote',
    name: 'Bruno Kambere Yote',
    profession: 'GIS specialist at Ministry of Housing',
    quote: 'The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand',
  },
];
const speakerItems = [];
const speakersBox = document.getElementById('speaker_box');
/* -- Item 1 Content -- */
const screenWidth = window.screen.width;

if (screenWidth <= 768) {
  speakersBox.innerHTML = '';
  for (let i = 0; i < 2; i += 1) {
    speakerItems.push(
      `
                <article class="card speaker_item" id="${speaker[i].id}" >
                    <div class="row g-0">
                    <div class="col-4">
                        <img class="img-fluid rounded-start border-0 img_expo" src="${speaker[i].thumbnail}" alt="${speaker[i].img_alt}">
                    </div>
                    <div class="col-8">
                        <div class="card-body card_body">
                        <header id="" class="card-title">
                            <h4 id="speaker_name_${[i]}" class="speaker_Item_head">${speaker[i].name}</h4>
                            <p id="speaker_Item_prof_${[i]}" class="speaker_Item_prof">${speaker[i].profession}</p>
                            <span class="grey_line"></span>
                        </header>
                        <p class="card-text">${speaker[i].quote}</p>
                        </div>
                    </div>
                    </div>
                </article>`,
    );
    speakersBox.innerHTML += speakerItems[i];
  }
  speakersBox.innerHTML += `
    <button type="button" class="btn btn-outline-dark btn-lg shadow" id="btn_more">
              MORE 
              <i class="bi bi-chevron-compact-down ms-1 mb-5" id="drop_down" style="color: red;"></i>
    </button>
    `;
} else if (screenWidth > 768) {
  speakersBox.innerHTML = '';
  for (let i = 0; i < speaker.length; i += 1) {
    speakerItems.push(
      `
                <article class="card speaker_item" id="${speaker[i].id}" >
                    <div class="row g-0">
                    <div class="col-4">
                        <img class="img-fluid rounded-start border-0 img_speaker" src="${speaker[i].thumbnail}" alt="${speaker[i].img_alt}">
                    </div>
                    <div class="col-8">
                        <div class="card-body card_body">
                        <header id="" class="card-title">
                            <h4 id="speaker_name_${[i]}" class="speaker_Item_head">${speaker[i].name}</h4>
                            <p id="speaker_Item_prof_${[i]}" class="speaker_Item_prof">${speaker[i].profession}</p>
                            <span class="grey_line"></span>
                        </header>
                        <p class="card-text">${speaker[i].quote}</p>
                        </div>
                    </div>
                    </div>
                </article>`,
    );
    speakersBox.innerHTML += speakerItems[i];
  }
}