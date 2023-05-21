import "./style.css"
const About = () =>{
    return <div className="wrapper">
        <div className="section">
            <div className="text-box">
                <h2>Chat BOX</h2>
                <p>Chat BOX je inovativna platforma za chat koja pruža korisnicima jedinstveno iskustvo komunikacije. Bez obzira jeste li tvrtka koja želi unaprijediti korisničku podršku ili jednostavno osoba koja želi razgovarati s prijateljima, Chat BOX je idealno rješenje za vas.</p>
            </div>
            <div className="img-box">
                <img src={require('../img/box.png') } alt='logo' className=''></img>
            </div>
        </div>
        <div className="section">
            <div className="text-box-full">
                <h2>Zašto odabrati Chat BOX?</h2>
                <hr></hr>
                <ul>
                    <li>Brza implementacija: Chat BOX se lako integrira s vašom postojećom platformom za podršku ili web stranicom. Naša intuitivna upravljačka ploča olakšava postavljanje i konfiguriranje.</li>

                    <li>Korisnička podrška 24/7: Chat BOX je dostupan 24 sata dnevno, 7 dana u tjednu, pružajući vašim korisnicima mogućnost da dobiju podršku kad god im je potrebna.</li>

                    <li>Poboljšano korisničko iskustvo: Pružite brze i personalizirane odgovore korisnicima, pomažući im da se osjećaju cijenjeno i zadovoljno vašom uslugom.</li>

                    <li>Povećanje prodaje: Chat BOX može pomoći u pretvaranju posjetitelja vaše web stranice u kupce. Brza komunikacija i relevantne informacije ključni su za povećanje prodaje.</li>
                </ul>
            </div>
        </div>
        <div className="section">
            <div className="text-box-full">
                <h2>Iz ponude izdvajamo</h2>
                <hr></hr>
                <div className="offer-section">
                    <div className="offer-item">
                    <img src={require('../img/implementation.png') } alt='logo' className=''></img>
                    <h3>Višekanalna podrška:</h3> Chat BOX omogućuje vam istovremenu interakciju s korisnicima putem različitih kanala, uključujući web stranice, mobilne aplikacije i društvene mreže. Sve poruke su objedinjene na jednom mjestu, što olakšava praćenje i upravljanje komunikacijom.
                    </div>
                    <div  className="offer-item">
                    <img src={require('../img/rating.png') } alt='logo' className=''></img>
                    <h3>Personalizacija:</h3> Prilagodite Chat BOX kako bi odgovarao vašem brendu ili osobnim preferencijama. Možete prilagoditi boje, logotipe i stilove kako bi se uskladio s vašim identitetom.
                    </div>
                    <div  className="offer-item">
                    <img src={require('../img/artificial-intelligence.png') } alt='logo' className=''></img>
                        <h3>Umjetna inteligencija:</h3> Chat BOX je opremljen moćnom umjetnom inteligencijom koja može automatski odgovarati na često postavljena pitanja i rješavati jednostavne probleme. To će vam pomoći uštedjeti vrijeme i poboljšati korisničko iskustvo.</div>
                    <div className="offer-item">
                    <img src={require('../img/increase.png') } alt='logo' className=''></img>
                    <h3>Analitika:</h3> Dobijte uvid u performanse svog chata putem detaljnih analitičkih izvještaja. Pregledajte statistiku, broj poruka, prosječno vrijeme odgovora i druge ključne metrike kako biste bolje razumjeli svoje korisnike i unaprijedili svoje usluge.
                    </div>
                </div>
            </div>
        </div>

        <div className="section">
            <div className="text-box-full">
                <h2>Javi nam se</h2>
                <hr></hr>
                <div className="contact">
                    <h3><a href="mailto:info@chatbox.com">info@chatbox.com</a></h3>
                    <h3><a href="tel:+38531223223">+385 223 223</a></h3>

                </div>
                
            </div>
        </div>
    </div>
}
export default About;