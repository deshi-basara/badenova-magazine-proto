(function() {

    'use strict';

    angular
        .module('app')
        .factory('ArticlesService', ArticlesService);

    ArticlesService.$inject = [];

    /**
     * Service for checking if the current user is authenticated
     */
    function ArticlesService() {

        var service = {
            allArticles: [
                {
                    "id": 1,
                    "image": "image2.jpg",
                    "title": "My Smart Home is my Castle",
                    "category": "saveenergy",
                    "categoryIcon": "../../images/feed/saveenergy.png" ,
                    "date": "01.01.2014",
                    "content": "Ob Licht, TV oder Heizung – wer träumt nicht davon, den Haushalt per Smartphone zu steuern und dabei auch noch Energie zu sparen? Wie der Alltag im Smart Home aussehen könnte, zeigt unsere fiktive Familie Peschke. Hereinspaziert! Tschüss, Energieverschwendung, hallo, Smart Home! Durch die Vernetzung von Haushaltsgeräten hilft das intelligente Haus seinen Bewohnern, Energie zu sparen. Einiges davon ist noch Zukunftsmusik. Einzelne Lösungen wie die Heizungs-App von tado° gibt es aber schon jetzt. So sparen Sie Energie und bis zu 31 % Heizkosten. Um es mit den Worten von Markus Peschke zu sagen:                 „Endlich jemand, der mitdenkt!“"
                },
                {
                    "id": 2,
                    "title": "tado°: Heizungssteuerung per App.",
                    "image": "image7.jpg",
                    "category": "saveenergy",
                    "categoryIcon": "../../images/feed/saveenergy.png" ,
                    "date": "23.03.2014",
                    "content": "Hausautomatisierung: Heizungssteuerung per App von tado°. Um wirklich effizient zu heizen, müsste Ihre Heizung mitdenken und selbständig handeln können. Kann sie nicht? Mit tado°, der intelligenten Heizungs-App, kann sie es wohl! Wir erklären, wie’s geht. Sechs Uhr morgens: eiskaltHaben Sie schon mal in einer einfachen Berghütte übernachtet? Auf dem Bärenfell vor dem Kamin, der Bach rauschte und draußen war es klirrend kalt? Fantastisch! Dann wissen Sie vielleicht auch, wie es sich anfühlt, um sechs Uhr morgens aufzuwachen und zu frieren, weil das Feuer seit Stunden aus ist.\n 22 Grad – und keiner ist daDas krasse Gegenteil zu diesem Szenario sind unnötig geheizte Wohnungen. Nachts bollert die Heizung auf Hochtouren, tagsüber hat das Wohnzimmer 22 Grad – obwohl gar keiner zu Hause ist. Das muss nicht sein. Denn das kostet unnötig Geld und belastet die Umwelt. Systeme zur Hausautomatisierung erleichtern das Steuern der Heizung und passen sich sogar den Gewohnheiten ihrer Nutzer an. So können Sie Ihre Finger getrost von der Heizungssteuerung oder dem Thermostat lassen – und sparen trotzdem. \n ENTEGA und tado° gehen schon mal vorIntelligentes Wohnen nennt sich das auf Neudeutsch. Das Ziel solcher Smart-Home-Systeme ist die Erhöhung der Wohn- und Lebensqualität sowie der Sicherheit und eine effizientere Energienutzung. Zu Grunde liegen den Systemen vernetzte und fernsteuerbare Geräte und Installationen sowie automatisierbare Abläufe.\n Der Münchner Hersteller tado° – Kooperationspartner von ENTEGA – gilt als einer der Vorreiter, wenn es um die smarte Heizungssteuerung per App geht. Das Ziel ist simpel: Die Heizungsanlage, meist eine Öl- oder Gastherme, soll mitdenken und schlau handeln. Dazu wird die Heizung mit dem Internet verbunden. Gesteuert wird sie ganz bequem und selbständig über eine App. Die Grunddaten – also z. B. wie warm die Wohnung sein soll, wenn man zu Hause ist – gibt der Nutzer einmal ein. Den Rest regelt die Heizungs-App. Außerdem – und das macht das tado° System noch smarter – berücksichtigt es den aktuellen Wetterbericht und plant davon ausgehend die nötige Heizleistung für den jeweiligen Tag."
                },
                {
                    "id": 3,
                    "title": "Umweltschutz im Büro",
                    "image": "image1.jpg",
                    "category": "saveenergy",
                    "categoryIcon": "../../images/feed/saveenergy.png" ,
                    "date": "13.05.2014",
                    "content": "Wird in Ihrem Büro auch zu viel Energie verbraucht? Mit nur wenigen kleinen Veränderungen und Maßnahmen lässt sich im Büro viel Energie sparen. Und mit ein paar größeren noch mehr. Das hilft der Umwelt und senkt Ihre Kosten. Anfangen!\n Umweltschutz im Büro beginnt mit dem eigenen Verhalten. Die günstigste und umweltfreundlichste Energie ist immer noch die, die gar nicht erst verbraucht wird.\n Müssen Sie das wirklich ausdrucken? In vielen Büros wird zu viel und oft unnötig gedruckt. Das Ergebnis sind Papierberge, die ohnehin niemand mehr anschaut. Dabei ist die digitale Kommunikation heute viel effizienter und auch Ihre Daten können sicher auf der Festplatte oder online gespeichert werden. So können Sie Papier- und Stromverbrauch senken, ohne in Ihrer Arbeit eingeschränkt zu werden.\n Hübscher Bildschirmschoner, aber wer schaut überhaupt hin? Bei längeren Unterbrechungen macht es einen spürbaren Unterschied, ob Sie Ihren Bildschirm ausschalten oder weiterlaufen lassen. Ihr durchschnittlicher Stromverbrauch kann deutlich gesenkt werden, indem Sie Ihr Arbeitsgerät automatisch in den Standby-Modus wechseln lassen, sobald Sie einige Minuten abwesend sind. \n Achten Sie auch auf den versteckten Stromverbrauch, den viele Geräte im Standby-Betrieb verursachen. Mit einer praktischen Steckdosenleiste zum Ein- und Ausschalten nehmen Sie mit nur einem Knopfdruck Ihren gesamten PC-Arbeitsplatz vom Netz. \n Die Sonne scheint – Ihre Bürobeleuchtung auch? Tageslicht ist gesund und macht elektrische Beleuchtung überflüssig. Manchmal werden die Lampen im Büro trotzdem achtlos angelassen. Hier lohnt es sich, einen Handgriff mehr zu machen und das Licht streng nach Bedarf an- und auch wieder auszuschalten. Lampen direkt an den Arbeitsplätzen können zusätzlich Strom sparen, da sie meist eine geringere Leistung als die Deckenbeleuchtung haben und dadurch weniger Energie verbrauchen. \n Ihr durchschnittlicher Stromverbrauch sinkt erheblich, wenn nachts und am Wochenende alles, was möglich ist, ausgeschaltet wird. Darum gilt: Der oder die Letzte macht das Licht aus. Und den Drucker. Und die Heizung. Und die Kaffeemaschine.          Das Klima heizt sich auf, Ihr Büro auch? Eine kurze Absprache mit den Kolleginnen und Kollegen über die Benutzung der Heizung kann bares Geld wert sein. Denn jedes Grad Raumtemperatur weniger spart etwa 6 % Energie. Die optimale Temperatur für Büroräume liegt zwischen 20 und 22 Grad Celsius. Anstatt die Heizung also ständig je nach persönlichem Geschmack rauf- und runterzudrehen, sollte man sich auf einen Mittelweg einigen. Das schützt das Klima im Büro – und das der Welt."
                },
                {
                    "id": 4,
                    "title": "Ökostrom dank Solartechnik",
                    "image": "image8.jpg",
                    "category": "greenenergy",
                    "categoryIcon": "../../images/feed/greenenergy.png" ,
                    "date": "22.11.2014",
                    "content": "Zellen für die Zukunft: Schon heute liefern Solaranlagen – auf Scheunen, Fabriken und Wohnhäusern – an sonnigen Tagen bis zu 20 Prozent des deutschen Strombedarfs. Tendenz steigend.\n Statt grünen Strom zu kaufen, ihn einfach selbst produzieren: Im Rahmen des Projekts Familie Klimaschutz montiert ENTEGA eine 16 qm große Solaranlage auf das Dach der Blöchingers. Der Clou: Damit erzeugen diese nicht nur CO2-freien Ökostrom, den sie im Haushalt selbst verbrauchen können, sondern auch jede Menge Kilowattstunden, die sie in den nächsten 20 Jahren zum vereinbarten Festpreis in das bundesweite Stromnetz einspeisen können. Klingt toll? Ist es auch. Doch bei aller Vorfreude will so eine Anlage sorgfältig geplant sein. Schließlich gilt es, zahlreiche Faktoren und Erfahrungswerte zu berücksichtigen, um die Energieausbeute am jeweiligen Standort zu optimieren. Nur so ist gewährleitet, dass sich die Investition möglichst schnell amortisiert, bzw. so früh wie möglich maximale Erträge erwirtschaftet. Die Entscheidung, welche Technologie für welches Hausdach und welches Nutzungsprofil optimal geeignet ist, können letztlich nur Experten treffen. Aber wir haben hier die wichtigsten Informationen zusammengestellt. Was genau ist Photovoltaik und wie unterscheidet sie sich von Solarthermie?\n Die Solartechnik macht sich die kostenlose, unerschöpfliche Energie der Sonne zunutze. Das Prinzip ist einfach: Das Sonnenlicht wird von großflächigen Paneelen aufgefangen und in Strom – bei der Photovoltaik – oder in Wärmeenergie – Solarthermie genannt – umgewandelt. Welche Technologie besser ist, lässt sich nicht pauschal sagen. Denn viele Fragen spielen für den Energieertrag eine entscheidende Rolle: Wie steil ist das Dach? Liegt die Fläche zeitweise im Schatten? Fängt sie eher Morgensonne oder Abendsonne ein? Ein steileres Dach spricht z.B. eher für Solarthermie, denn die erzeugte Wärme wird überwiegend für die Übergangszeit in Herbst und Frühjahr benötigt, wenn die tiefstehende Sonne günstiger auf die Zellen trifft. Ab welcher Dachfläche lohnt sich der Einsatz von Photovoltaik?\n Die gute Nachricht vorweg: Die Strahlungsintensität ist überall in Deutschland ausreichend für einen ertragreichen Einsatz der Solartechnik. Prinzipiell kommt also jede Dachfläche an jedem Standort in Betracht. Die entscheidende Frage lautet also nicht ob, sondern nur noch wie schnell sich die Investition rechnet. Beim gegenwärtigen Stand der Technik können Sie allerdings für eine Planung von folgenden Idealwerten ausgehen: Die Leistungsfähigkeit einer Anlage wird in kWpeak angegeben, peak bedeutet die Spitzenleistung unter optimalen Bedingungen. Als Faustformel gilt: Für die Produktion von 1 kWpeak sind 6–9 m² Solarzellen notwendig."
                },
                {
                    "id": 5,
                    "title": "Die badenova Ökobilanz",
                    "image": "windmill.jpg",
                    "category": "news",
                    "categoryIcon": "../../images/feed/news.png" ,
                    "date": "01.01.2015",
                    "content": "Bringt das was für die Umwelt, wenn ich auf Ökostrom oder Klimaneutrales Erdgas von ENTEGA umsteige? Diese und weitere Fragen beantwortet unsere Ökobilanz in Bildern.\n Kunden fragen uns oft, „Was bringt das, wenn ich Ökostrom beziehe? Ändert das überhaupt etwas?”. Die Frage ist verständlich. Denn es gibt ja keine Direktleitung vom Ökostrom-Versorger zum Endkunden, weshalb aus jeder Steckdose ein Durchschnittsstrom fließt, der leider nur zum Teil aus nachhaltiger Erzeugung stammt. Die große Änderung passiert also nicht an der eigenen Steckdose. Sie passiert, wenn viele Kunden auf nachhaltige Energie umsteigen. Dann sind die positiven Effekte beträchtlich!\n So sparen zum Beispiel unsere Ökostrom-Kunden 370.000 Tonnen CO2 pro Jahr. Darauf können wir stolz sein. Auch auf die 350.000 Hektar Wald, die wir für die Klimaneutralität unseres Erdgases aufgeforstet und geschützt haben. Und weil es uns auch wichtig ist, unseren Kunden beim Energiesparen zu helfen, unterstützen wir sie beim Kauf neuer, energieeffizienter Haushaltsgeräte. Allein im Jahr 2012 haben wir das mit 442.000 € gefördert. Gemeinsam mit unseren Kunden bewegen wir also viel für die Umwelt. Sehen Sie selbst. In unserer Ökobilanz in Bildern."
                },
                {
                    "id": 6,
                    "title": "Energiezukunft durch High-Tech",
                    "image": "4080682044_0596eb4475_o.jpg",
                    "category": "news",
                    "categoryIcon": "../../images/feed/news.png" ,
                    "date": "01.02.2014",
                    "content": "Das überarbeitete EEG fördert Investitionen nun noch zielgerichteter.\n Die TWS stellt sich den neuen Problemen und entwickelt hocheffiziente Lösungen. Sie brummen seit August: die Generatoren des neuen Blockheizkraftwerkes (BHKW) in der Ravensburger Eissporthalle. Dabei wandeln sie nach dem Prinzip der Kraft-Wärme-Kopplung Gas in Wärme und Strom um und das mit einem bemerkenswerten Wirkungsgrad. Der selbst erzeugte Strom hält die Anlagen der Eissporthalle und der angeschlossenen Gastronomie am Laufen. Die Wärme aus dem hauseigenen Kraftwerk nutzt die Eissporthalle zum Teil selbst, zudem wird mit Hilfe einer speziellen Versorgungsleitung ein benachbarter Gebäude-Komplex beheizt. „Dieses lokale Projekt zeigt, wie durch gebündelte Kräfte ein zukunftsweisendes Energiekonzept entstehen kann“, lobte Oberbürgermeister Daniel Rapp bei der Einweihung. Entwickelt haben dieses Konzept die Ingenieure der TWS; Auftraggeber sind die Stadtwerke Ravensburg, die Anfang des Jahres die Betriebsführung der beliebten Freizeitstätte übernommen haben. Innovativer Energiespeicher Mit in das Nahwärmenetz integriert ist ein Pufferspeicher für nicht sofort abgerufene Energie. „Es war uns wichtig, eine solche Technologie in das Projekt einzubinden“, erklärt TWS-Geschäftsführer Dr. Andreas Thiel-Böhm. Nachdenklich stimmt ihn aber, dass innovative Speicher für Strom und Wärme durch das über"             },
                {
                    "id": 7,
                    "title": "Die Region erleben",
                    "image": "image7.jpg",
                    "category": "freetime",
                    "categoryIcon": "../../images/feed/freetime.png" ,
                    "date": "24.05.2014",
                    "content": "Bereits zum fünften Mal in Folge wurde die Tbadenova von einem unabhängigen Online-Energieverbraucherportal als TOP-Lokalversorger ausgezeichnet. Ohne die TWS-Kunden und die Menschen in der Region wäre dieser nachhaltige Erfolg nicht möglich. Denn ihr positives Urteil ist es, das die TWS im Ranking immer wieder gut abschneiden lässt. Für diese Treue zum Unternehmen möchte die TWS ihren Kunden danken. Gemeinsam mit vielen Partnern hat sie deshalb ein besonderes Gutscheinheft aufgelegt: von regionalen Anbietern für die Menschen in der Region.\n Darin versammelt sind Rabattgutscheine für Sport-, Kultur- und Freizeitaktivitäten sowie weitere Vergünstigungen bei Partnern im Schussental und darüber hinaus. Es ist garantiert für jeden Geschmack und für jedes Alter etwas dabei: Ob der Gutscheinheft-Besitzer sich nun fürs Theater interessiert oder lieber durch ein Museum schlendert, wandert oder Ski fährt, schwimmt oder sich eher in einer Therme oder beim Kinobesuch erholt – die Vorteilspartner kommen aus den unterschiedlichsten Bereichen. Alle Partnerunternehmen sind in der Liste rechts unten zu finden. Das TWS-Gutscheinheft erhalten alle TWS-Strom-, Gas- und Wärmekunden automatisch per Post. Die TWS wünscht viel Spaß mit dem TWSGutscheinheft."
                },
                {
                    "id": 8,
                    "title": "Klimaschutz aus der Küche",
                    "image": "image8.jpg",
                    "category": "family",
                    "categoryIcon": "../../images/feed/family.png" ,
                    "date": "11.01.2015",
                    "content": "Unser Essen ist für etwa 12 Prozent unserer durchschnittlichen CO2-Bilanz verantwortlich. Die Tomate aus dem Garten verursacht wenig, das Rindersteak aus Übersee aber viel CO2. Doch Vorsicht: Vegetarier sind nicht automatisch die besseren Klimaschützer.\n „Wie hältst Du’s mit dem Fleischkonsum?“ – haben wir Familie Klimaschutz vor einigen Wochen befragt, um ihre ernährungsbedingten CO2-Emissionen zu bilanzieren. Nicht die einzige, aber eine entscheidende Frage: Denn Tiere monatelang aufzuziehen und sie mit eigens angebauten Pflanzen zu füttern, sie zu schlachten und weiterzuverarbeiten, um dann das gekühlte Fleisch zum Endverbraucher zu transportieren, verschlingt Unmengen an Energie. Und hat einen wesentlichen Anteil an den 1,35 Tonnen Kohlendioxid, die pro Person und pro Jahr durch die Ernährung verursacht werden. Ein Kilo Fleisch kann so schädlich sein wie 250 Kilometer Autofahrt oder – je nach Berechnung – 36 Kilo CO2(1). \n „Aber Fleisch wurde doch schon immer gegessen“, mäkeln die Skeptiker des Klimawandels. Das stimmt natürlich, jedoch waren es vor 150 Jahren in Deutschland 10 kg pro Person und Jahr – heute sind es 62 kg (2). Hochgerechnet auf ein Menschenleben sind dies 1094 Tiere (3): Vier Kühe, vier Schafe, zwölf Gänse, 37 Enten, 46 Truthähne, 46 Schweine, 945 Hühner. Fleischverzicht im Selbstversuch: Müssen wir also alle Vegetarier werden? Familie Klimaschutz hat das im Selbstversuch ausprobiert und ihre Erfahrungen auf ENTEGAs facebook-Seite geteilt. Um es vorwegzunehmen: Ernährungsgewohnheiten sind genau das – Gewohnheiten. Und die ändert man nicht so leicht. Wer gerne Fleisch isst, wird nicht von heute auf morgen zum begeisterten Vegetarier. Und das Zubereiten leckerer und abwechslungsreicher Gerichte mussten auch die meisten Vegetarier erst lernen. Fazit des Experiments: ein komplett fleischfreier Lebenswandel scheidet für Blöchingers aus, in diesem Punkt kollidieren Klimaschutz und Lebensqualität. Etwas weniger ist mehr … viel mehr"                },
                {
                    "id": 9,
                    "title": "Klimaneutrales Erdgas",
                    "image": "image6.jpg",
                    "category": "naturalgas",
                    "categoryIcon": "../../images/feed/nature.png" ,
                    "date": "19.07.2014",
                    "content": "Auch für Erdgas gibt es eine klimafreundliche Alternative. Das Zauberwort lautet: CO2-Kompensation.\n Heizen mit Verantwortung: Für Klimaneutrales Erdgas wird CO2durch Aufforstung und Waldschutz kompensiert. Das wichtigste Ziel von ENTEGA ist eine CO2-neutrale Energieversorgung für alle. Doch Kohlendioxid lässt sich nicht bei allen Energiequellen komplett vermeiden. Für das Beheizen von Wohnungen ist Erdgas beispielsweise momentan noch unverzichtbar, allerdings wird beim Verbrennen, bei der Förderung und beim Transport unweigerlich CO2 freigesetzt. Doch auch hier geht ENTEGA mit gutem Beispiel voran: CO2, das sich noch nicht komplett vermeiden lässt, gleichen wir an anderer Stelle wieder aus. Für den klimaneutralen Erdgas-Tarif von ENTEGA werden die entstehenden Emissionen durch langfristig angelegte Waldschutz- und Aufforstungsprojekte kompensiert. Der Effekt für das Klima: Es wird durch kein zusätzliches Gramm CO2 belastet. Die Umwandlung von Kohlendioxid. Das Prinzip ist denkbar einfach: Bäume können Kohlendioxid aus der Atmosphäre binden. Sie nehmen CO2 aus der Luft und Wasser (H2O) aus dem Boden auf. Daraus bilden sie dann durch Photosynthese Sauerstoff (O2), der an die Luft abgegeben wird, und Kohlenstoff (C), der in der Biomasse fixiert wird. Diesen Effekt macht sich ENTEGA zunutze. Denn sowohl durch das Pflanzen neuer Bäume als auch durch den Schutz und Erhalt existierender Waldflächen wird der Atmosphäre Kohlendioxid entzogen. Weltweite Waldschutz-Projekte Das ENTEGA Schwesterunternehmen Forest Carbon Group AG finanziert, entwickelt und steuert weltweit solche Waldschutz- und Aufforstungsprojekte. Ein gutes Beispiel ist das Aufforstungsprojekt CERP (Community Environmental Restoration Program) im Südwesten der kanadischen Provinz British Columbia. Dort wurden geschädigte Auwälder renaturiert, die vor Jahrzehnten aus wirtschaftlichem Interesse abgeholzt wurden. Solche gerodeten Flächen werden daraufhin auf absehbare Zeit von hartnäckigem Gestrüpp und Buschwerk dominiert – und können somit wesentlich weniger CO2 in der Biomasse binden als die Wälder zuvor."                },
                {
                    "id": 10,
                    "title": "Urlaub mit Klimawert",
                    "image": "image3.jpg",
                    "category": "culture",
                    "categoryIcon": "../../images/feed/culture.png" ,
                    "date": "11.05.2014",
                    "content": "Ob Hotel oder Hütte: Immer mehr Menschen entscheiden sich für umweltbewusste Gastgeber. Beispielhaftes Engagement von Gastronomen und Hoteliers gibt es vor allem im Südwesten. Etliche Initiativen und auch die EnBW unterstützen sie dabei. Im Urlaub will man vor allem eins: sich erholen. Was es dazu für die meisten Reisenden braucht, ist eine intakte Umwelt und angenehme Umgebung. Wie einmalig und verletzlich unsere Erde ist, scheint den Deutschen zunehmend bewusst zu werden. Denn immer mehr achten bei der Wahl des Urlaubsorts auf Nachhaltigkeit. Laut Reiseanalyse 2014 der Forschungsgemeinschaft Urlaub und Reisen e. V. (FUR) war nachhaltiges Handeln des Gastgebers im vergangenen Jahr bereits für über eine Million Deutsche das wichtigste Entscheidungskriterium, rund 22 Millionen strebten ein ökologisch einwandfreies Urlaubserlebnis an, Tendenz laut FUR steigend. Etliche Urlaubsportale und Reiseanbieter führen nachhaltige Reisen und Unterkünfte auch bereits als eigene Kategorie (siehe Randspalte rechts). Es scheint, dass die Bedeutung des Umweltschutzes und der Energiewende mehr und mehr in der Gesellschaft ankommt."
                },
                {
                    "id": 11,
                    "title": "Schneewalzer am Trauf",
                    "image": "image4.jpg",
                    "category": "nature",
                    "categoryIcon": "../../images/feed/nature.png" ,
                    "date": "17.09.2014",
                    "content": "Paradiesgleich ist es auf der Alb, wenn ihre Höhen verschneit sind und in der Sonne glitzern. Da zieht es einen hinaus in die weiße stille Winterwelt, mitten durch Heidelandschaften, über Streuobstwiesen und am Albtrauf entlang. Man begegnet Wacholderbüschen, die weiße Mützchen tragen, und Obstbäumen, die ihr grünes Kleid gegen Eiskristalle getauscht haben. Besonders malerisch ist die Alblandschaft im Winter rund um den Heersberg bei Albstadt-Burgfelden. Nicht ohne Grund gibt es dort den ersten reinen Premium-Winterwanderweg der Alb. Der 5,3 Kilometer lange Rundweg beginnt am Parkplatz Heersberg in Albstadt-Burgfelden, und mit lediglich 97 Höhenmeter Differenz gilt er als leicht begehbar. Die Schneedecke auf dem nur im Winter ausgewiesenen Wanderweg wird regelmäßig gewalzt, so fest, dass man auch drauf tanzen könnte. Und dazu kann man Lust bekommen, denn der Weg führt über große Strecken am Trauf entlang mit traumhaften Ausblicken auf nahe Täler und das weite Alpenvorland. Wohl deshalb trägt der wunderbar komponierte Weg auch den Namen „Schneewalzer“ und kommt in der Werteskala der Premiumwege auf traumhafte 78 von maximal 100 möglichen Erlebnispunkten. Mit mittlerer Kondition und gutem Schuhwerk wandert man rund zweieinhalb Stunden durch die idyllische Landschaft. Zur Einkehr lädt das am Weg gelegene Berg-Café im Haus der Künstlerfamilie Wedel ein. Dort gibt es neben wärmenden Getränken Kunstgenuss. Im Obergeschoss warten Möbel und Arbeiten der Künstler Edith WedelKükenthal und Fritz Wedel auf die Besucher. Immer wieder haben sich Künstler in Burgfelden niedergelassen; der Böllat – ein markanter Felsvorsprung – und die märchenhafte Aussicht haben sie wohl angezogen. Burgfelden war im Mittelalter kirchlicher Mittelpunkt der gesamten Region. Es gehörte zu den Urpfarreien. Lohnenswert ist ein Abstecher zur romanischen Michaelskirche im Dorf. Sie bezaubert mit mittelalterlichen Fresken, deren Zyklus vom Weltgericht beherrscht wird."
                },
                {
                    "id": 12,
                    "title": "Skigebiet für Langläufer und Familien",
                    "image": "image9.jpg",
                    "category": "family",
                    "categoryIcon": "../../images/feed/family.png" ,
                    "date": "11.05.2014",
                    "content": "Im Nordosten auf der Schwäbischen Alb liegt der Albuch, ein idealer Ort für Wintersportler. 100 Kilometer Loipen, elf Langlaufrouten, Skatingstrecken und 20 Kilometer Winterwanderwege lassen kaum Wünsche offen. Nur rund 15 Minuten mit dem Auto von Schwäbisch Gmünd entfernt, bietet die Region um Heubach, Bartholomä, Essingen, Königsbronn und Steinheim mit ihren Hochflächen, Wäldern und Steillagen nicht nur eine schöne Landschaft, vielmehr kommen auch die Wintersportler auf ihre Kosten. Für Langläufer ist mit elf unterschiedlichen Loipen verschiedener Schwierigkeitsgrade Einiges geboten – sowohl für Freunde des klassischen Langlaufs als auch für Skater. Um 18 Uhr schließen die Loipen – die leichte, 1,2 Kilometer lange Abendloipe am Skigelände Wirtsberg in Bartholomä ist auch danach noch geöffnet. Ein Übungslift und zwei Schlepplifte, leichte bis mittelschwere Abfahrten, Flutlicht sowie Ski- und Snowboardschulen machen das Wintersportzentrum Hirtenteich besonders beliebt bei Familien. Es ist zugleich das größte Wintersportzentrum der Region mit der längsten Abfahrtsmöglichkeit. Außerdem gibt es den Skilift am Wirtsberg, wo ab Dezember Skikurse für alle Altersklassen angeboten werden. Optimale Bedingungen für eine neuere Wintersportart, das Snow-Kiting, hat der Albuch ebenfalls. Auf der Kiting-Area bei der Lauterburg, nahe des Wintersportzentrums Hirtenteich, fliegen die Sportler dabei an einem Zugdrachen auf Ski oder Snowboard kilometerweit durch unberührten Pulverschnee. Außerdem steht in Lauterburg an der Bergrettungswache ein Eiskletterturm. Für Schneeschuhwanderer gibt es im Albuch spezielle Routen. Die Winterwanderwege befinden sich rund um Bartholomä, Rötenbach, Gnannenweiler und das Naturschutzgebiet Wental mit seinem Felsenmeer."
                }
            ],
            teaserArticle: {
                "id": 12,
                "title": "Skigebiet für Langläufer und Familien",
                "image": "image9.jpg",
                "category": "family",
                "categoryIcon": "../../images/feed/family.png" ,
                "date": "11.05.2014",
                "author": "Harald Eberle",
                "content": "Im Nordosten auf der Schwäbischen Alb liegt der Albuch, ein idealer Ort für Wintersportler. 100 Kilometer Loipen, elf Langlaufrouten, Skatingstrecken und 20 Kilometer Winterwanderwege lassen kaum Wünsche offen. Nur rund 15 Minuten mit dem Auto von Schwäbisch Gmünd entfernt, bietet die Region um Heubach, Bartholomä, Essingen, Königsbronn und Steinheim mit ihren Hochflächen, Wäldern und Steillagen nicht nur eine schöne Landschaft, vielmehr kommen auch die Wintersportler auf ihre Kosten. Für Langläufer ist mit elf unterschiedlichen Loipen verschiedener Schwierigkeitsgrade Einiges geboten – sowohl für Freunde des klassischen Langlaufs als auch für Skater. Um 18 Uhr schließen die Loipen – die leichte, 1,2 Kilometer lange Abendloipe am Skigelände Wirtsberg in Bartholomä ist auch danach noch geöffnet. Ein Übungslift und zwei Schlepplifte, leichte bis mittelschwere Abfahrten, Flutlicht sowie Ski- und Snowboardschulen machen das Wintersportzentrum Hirtenteich besonders beliebt bei Familien. Es ist zugleich das größte Wintersportzentrum der Region mit der längsten Abfahrtsmöglichkeit. Außerdem gibt es den Skilift am Wirtsberg, wo ab Dezember Skikurse für alle Altersklassen angeboten werden. Optimale Bedingungen für eine neuere Wintersportart, das Snow-Kiting, hat der Albuch ebenfalls. Auf der Kiting-Area bei der Lauterburg, nahe des Wintersportzentrums Hirtenteich, fliegen die Sportler dabei an einem Zugdrachen auf Ski oder Snowboard kilometerweit durch unberührten Pulverschnee. Außerdem steht in Lauterburg an der Bergrettungswache ein Eiskletterturm. Für Schneeschuhwanderer gibt es im Albuch spezielle Routen. Die Winterwanderwege befinden sich rund um Bartholomä, Rötenbach, Gnannenweiler und das Naturschutzgebiet Wental mit seinem Felsenmeer."
            },

            getAllArticles: getAllArticles,
            getTeaserArticle: getTeaserArticle
        };

        return service;

        ///////////////



        /**
         * Returns all articles.
         */
        function getAllArticles() {
            return service.allArticles;
        }

        /**
         * Returns the teaser article.
         */
        function getTeaserArticle() {
            return service.teaserArticle;
        }

    }


})();