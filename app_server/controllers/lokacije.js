/* Vrni začetno stran s seznamom lokacij */
module.exports.seznam = function(req, res) {
  res.render('lokacije-seznam', { title: 'Seznam lokacij' });
};

/* Vrni podrobnosti lokacije */
module.exports.podrobnostiLokacije = function(req, res) {
  res.render('index', { title: 'Podrobnosti lokacije' });
};

/* Vrni stran za dodajanje komentarjev */
module.exports.dodajKomentar = function(req, res) {
  res.render('index', { title: 'Dodaj komentar' });
};

/* Vrni stran Profile */
module.exports.profil = function(req, res) {
  res.render('profil', { title: 'Prikazi profil' });
};

/* Vrni podrobnosti lokacije */
module.exports.podrobnostiLokacije = function(req, res) {
  res.render('lokacija-podrobnosti', { 
    title: 'Stari grad Celje Podrobnosti lokacije',
    glavaStrani: {
      naslov: 'Stari grad Celje'
    },
    stranskaOrodnaVrstica: {
      kontekst: 'je na EduGeoCache, ker je zanimiva lokacija, ki si jo lahko ogledate, ko ste brez idej za kratek izlet.',
      poziv: 'Če vam je lokacija všeč, ali pa tudi ne, dodajte svoj komentar in s tem pomagajte ostalim uporabnikom pri odločitvi.'
    },
    lokacija: {
      naziv: 'Stari grad Celje',
      naslov: 'Cesta na grad 78, 3000 Celje, Slovenija',
      ocena: 3,
      lastnosti: ['slikovit razgled', 'vstopnina', 'otrokom prijazno'],
      koordinate: {lat: 46.219849, lng: 15.271601},
      delovniCas: [{
        dnevi: 'ponedeljek - petek',
        odprtje: '9:00',
        zaprtje: '21:00',
        zaprto: false
      }, {
        dnevi: 'sobota',
        odprtje: '9:00',
        zaprtje: '19:00',
        zaprto: false
      }, {
        dnevi: 'nedelja',
        zaprto: true
      }],
      komentarji: [{
        avtor: 'Dejan Lavbič',
        ocena: 5,
        datum: '7. november, 2018',
        besediloKomentarja: 'Odlična lokacija, ne morem je prehvaliti.'
      }, {
        avtor: 'Kim Jong Un',
        ocena: 1,
        datum: '8. november, 2018',
        besediloKomentarja: 'Čisti dolgčas, še kava je zanič.'
      }]
    }
  });
};