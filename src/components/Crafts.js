const crafts = [
    {
      title: "Lucka 1: Skapa papperssnöflingor!",
      description: [
        "1. Ta ett kvadratiskt papper (gärna tunt) och vik det diagonalt tre gånger till en mindre triangel.",
        "2. Använd en sax för att klippa små trianglar och former längs de vikta kanterna.",
        "3. Veckla försiktigt upp pappret för att avslöja din unika snöflinga."
      ],
      tips: "Experimentera med olika vikningar och klipp för varierade snöflingemönster.",
      imageUrl: "../luckor/lucka1.png", // Lägg till en bild om du vill
    },
    {
      title: "Lucka 2: Doftande apelsiner med nejlikor",
      description: [
        "1. Ta en apelsin och placera nejlikor i ett mönster (kors, cirkel, eller diagonalt).",
        "2. För att göra det enklare kan du använda en tandpetare för att förbereda hålen.",
        "3. Häng upp apelsinen med ett band eller placera den i en skål för en härlig juldoft."
      ],
      tips: "Blanda apelsinerna med kanelstänger för en extra doft.",
      imageUrl: "../luckor/lucka2.png", // Valfritt
    },
    {
      title: "Lucka 3: Egna julgranskulor",
      description: [
        "1. Ta genomskinliga plastkulor som kan öppnas.",
        "2. Fyll dem med glitter, små pompoms, eller julkulor i olika färger.",
        "3. Stäng kulorna ordentligt och häng dem i granen."
      ],
      tips: "För ett extra personligt uttryck, skriv ett namn på kulan med en permanent marker.",
      imageUrl: "../luckor/lucka3.png", // Valfritt
    },
    {
      title: "Lucka 4: Bygg en snögubbe av strumpor!",
      description: [
        "1. Ta en vit strumpa och fyll den med ris till en tredjedel. Knyt av för att skapa kroppen.",
        "2. Fyll resten av strumpan och knyt av igen för huvudet.",
        "3. Använd knappar för ögon och klipp en annan färgad strumpa för att göra halsduk och mössa."
      ],
      tips: "Sätt en liten pompom på toppen av mössan för en extra touch.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 5: Skapa personliga julkort",
      description: [
        "1. Använd färgpapper som bas och vik i två.",
        "2. Klipp ut former av granar, hjärtan, eller stjärnor och klistra fast på kortet.",
        "3. Dekorera med glitterlim, pennor och klistermärken för en personlig touch."
      ],
      tips: "Skriv en hälsning inuti kortet för att sprida julglädje.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 6: Gör en papperskrans",
      description: [
        "1. Klipp ut 20 gröna löv från färgat papper och några röda bär.",
        "2. Limma löven i en cirkel på en pappbas och lägg till bären.",
        "3. Sätt ett rött band på toppen för att hänga upp."
      ],
      tips: "Använd olika gröna nyanser för en mer naturlig look.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 7: Tillverka och dekorera pepparkakor",
      description: [
        "1. Gör en pepparkaksdeg och kavla ut den.",
        "2. Använd kakformar för att stansa ut figurer.",
        "3. Grädda enligt receptet och låt svalna innan du dekorerar med kristyr."
      ],
      tips: "Smält socker kan användas för att sätta ihop delar till pepparkakshus.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 8: Snöglob av glasburk!",
      description: [
        "1. Fyll en glasburk med vatten och tillsätt glitter.",
        "2. Limma en liten plastfigur (ex. snögubbe eller gran) i locket.",
        "3. Skruva på locket ordentligt och skaka för en snöfallseffekt."
      ],
      tips: "Tillsätt lite glycerin för att få glittret att sjunka långsamt.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 9: Adventsstjärna",
      description: [
        "1. Klipp ut två stjärnor av kartong.",
        "2. Limma på glitter eller måla i guld och silver.",
        "3. Sätt ihop stjärnorna för en 3D-effekt och häng upp i fönstret."
      ],
      tips: "Använd en hålslagare för att skapa ett hål för ett band att hänga upp med.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 10: Pärlplattor med julmotiv",
      description: [
        "1. Välj pärlor i julfärger (rött, grönt, vitt) och skapa motiv som granar, stjärnor, eller hjärtan.",
        "2. Lägg pärlorna på pärlplattan och stryk över ett bakplåtspapper tills pärlorna smälter samman.",
        "3. Gör hål för att kunna hänga figurerna som dekoration."
      ],
      tips: "Använd pärlor i olika storlekar för extra effekt.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 11: Ljuslykta av glasburk",
      description: [
        "1. Måla julmotiv eller snöflingor på utsidan av en glasburk med glasfärg.",
        "2. Låt torka och sätt i ett värmeljus.",
        "3. Bind ett band runt toppen för en extra touch."
      ],
      tips: "Bind gärna ett rött eller grönt band för julkänsla.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 12: Skapa en julby",
      description: [
        "1. Använd små kartonger eller träbitar som du målar som hus.",
        "2. Dekorera med fönster, dörrar och bomull som snö.",
        "3. Placera små ljusslingor inuti husen för att ge dem en varm känsla."
      ],
      tips: "Häng upp några små träd bredvid husen för extra julstämning.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 13: Glitterstjärna",
      description: [
        "1. Ta en piprensare och forma den som en stjärna.",
        "2. Rulla stjärnan i lim och doppa den i glitter.",
        "3. Gör flera stjärnor och häng dem i en girlang."
      ],
      tips: "Gör små stjärnor i olika storlekar och färger för en fin effekt.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 14: Pepparkaksgirlang",
      description: [
        "1. Baka små pepparkakor och gör hål i toppen av varje kaka.",
        "2. Trä ett snöre genom hålen och häng upp girlangen.",
        "3. Förvara girlangen svalt för att hålla den fräsch längre."
      ],
      tips: "Skapa en pepparkaksgirlang i olika former för en varierad dekor.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 15: Pappersgran",
      description: [
        "1. Rulla gröna papper till koner.",
        "2. Limma på en cirkelbas för att skapa en mini-gran.",
        "3. Dekorera med små pompoms eller glitter."
      ],
      tips: "Skapa flera små granar och ställ dem på bordet.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 16: Juleljus av burk",
      description: [
        "1. Måla glasburkar med julmotiv och låt torka.",
        "2. Fyll burkarna med ett värmeljus och tänd.",
        "3. Sätt ett snöre runt burkens topp för dekoration."
      ],
      tips: "Byt ut ljusen mot LED-ljus för säkerhets skull.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 17: Handgjord julgransprydnad",
      description: [
        "1. Klipp ut figurer från kartong eller plast.",
        "2. Måla figurerna med julfärger och dekorera med glitter.",
        "3. Sätt ett band i toppen för att kunna hänga dem i granen."
      ],
      tips: "Använd små pärlor eller paljetter för extra glans.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 18: Snöig vinterbild",
      description: [
        "1. Måla en vinterscen med snö på en bit papper.",
        "2. Använd bomull för att skapa snöeffekter på bilden.",
        "3. Ram in din vinterbild för att ge den en fin avslutning."
      ],
      tips: "Använd glittrande lim för att skapa snöeffekten.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 19: Julstjärna av papper",
      description: [
        "1. Klipp ut stjärnformade mönster i papper.",
        "2. Limma ihop dem för att skapa en tredimensionell stjärna.",
        "3. Häng upp stjärnan med ett snöre."
      ],
      tips: "Använd mönstrat papper för att ge stjärnan mer liv.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 20: Röd julkrans",
      description: [
        "1. Klipp ut en cirkel från röd kartong.",
        "2. Limma på små runda bitar i rött och grönt för att skapa kransen.",
        "3. Sätt ett rött band på toppen för att hänga upp."
      ],
      tips: "Lägg till små pärlor för en extra effekt.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 21: Skapa en julbock",
      description: [
        "1. Använd en liten gren och forma till en bock.",
        "2. Måla bocken med röd och grön färg.",
        "3. Bind ett band runt halsen för att göra den festlig."
      ],
      tips: "Använd naturmaterial som små kottar för att dekorera.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 22: Snöglob av glasburk",
      description: [
        "1. Limma en julfigur på locket av en glasburk.",
        "2. Fyll burken med vatten och glitter.",
        "3. Skruva på locket och skaka för snöeffekt."
      ],
      tips: "Använd glycerin för att göra glitteret långsamt sjunka.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 23: Adventskalenderlåda",
      description: [
        "1. Bygg små lådor av kartong.",
        "2. Måla dem i julfärger och numrera dem från 1 till 24.",
        "3. Fyll varje låda med små överraskningar eller godis."
      ],
      tips: "Ställ upp lådorna i en pyramidform för en fin visning.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
    {
      title: "Lucka 24: Julstjärna",
      description: [
        "1. Skapa en stor julstjärna av papper eller trä.",
        "2. Måla eller dekorera med glitter.",
        "3. Häng upp den på väggen eller i fönstret."
      ],
      tips: "Lägg till ljus runt stjärnan för att skapa en magisk effekt.",
      imageUrl: "path-to-your-image.jpg", // Valfritt
    },
  ];
  
  export default crafts;
  
  