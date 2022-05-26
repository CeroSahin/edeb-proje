const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));

app.set('views', "views");
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

const port  = process.env.port || 3000;

const articles = [
    {
        id : 0,
        title : "Arkadaşlık Üzerine",
        content : "Sağlam arkadaşın özellikleri nelerdir? Bir kere arkadaş dediğin kişi sırf kendi gününü anlatmak için “Naber?” diye sormaz. Yeni aldığı kitabı göstermek için “Ne okuyorsun?” diye sormaz. Sen ona kötü bir durumu anlattığında, “Benim de geçen yıl teyzeme şöyle olmuştu…” diye konuşmaya başlamaz. Gerçek arkadaş, iyi bir dinleyicidir. Herkese karşı iyi bir dinleyicidir demiyorum asla. Sana karşı iyi bir dinleyicidir. Çünkü merak eder, senin durumunu, gününü, anlatacağın şeyleri merak eder. Peşine kendi bilgilerini, tecrübelerini sıralamak için değil; senin sevincini, senin üzüntünü kendisi de hissetmek istediği için dinler. Gerçek arkadaş senle olan sıkıntısını halının kenarına atmaz, yüzüne söyler. Ama eğer sen de en az onun kadar gerçek bir arkadaşsan, bir sıkıntı olduğunu anlayıp ona sorarsın. Tabi bu son iki cümlemdeki aksiyonların hemen faaliyete geçmesi zaman alır. Sonuçta kimse çok iyi arkadaş olarak başlamaz ilişkilerine. Önce tanıdık olursunuz, sonra arkadaş, sonra kanka, sonra yakın arkadaş… Herkes bu merdivenleri tırmanamaz ama merdivenin son basamağındaki kişiyle hayatı paylaşmak çok zevklidir. İyi ki fazla basamaklı bir merdiven kurmuşum dersiniz. Çünkü ikiniz de birbirinizin statü merdivenlerini tırmanırken çok şey öğrenmiş, çok şey deneyimlemiş olursunuz."
    },
    {
        id : 1, 
        title : "Zorbaların aileleri para cezası ödemeli midir?",
        content : "Hayır! Çocuklar, her ne kadar tatlı olsalar da, çok acımasız olabiliyor. Kimisi paylaşma eğitimini evde almamış oluyor, kimisi sokakta duyduğu küfürlerden ve kendini yetiştiremeyen insanların davranışlarından etkilenebiliyor, kimisi anne babasının bile farkında olmadığı ama çocuğuna yansıttığı bir kibiri, yalancılığı, kaybetme korkusunu ve daha bir sürü türlü travmatik olay sonucu gelişen alışkınlıkları örnek alıyor. Kısacası çocuğun okuldaki davranışlarını etkileyen birçok etken var. Bu sorunları çözmek yerine ailesine para ödetmek, Gogol’un kitaplarında anlata anlata bitiremediği 19. yüzyıl Rusyası insanı kılıklı gençlerin yetişmesine sebep olur. Rüşvetçi, cimri, paragöz bir nesil geliyorsa zaten ülkeye geçmiş olsundan başka bir şey denmez. Neden mi böyle olur? En basitinden, para cezası koymak zengin ailelerin çocuklarına bir uyarı niteliği taşımazken, fakir ailelerin çocukları okuldaki davranışının altında yatan sebebi kendisi bile çözemeden bir de evde ebeveynlerinden azar işittiğinde küçük dünyasındaki depremden zarar görmüş olarak çıkar. Okula gittiğinde kendini yanlış bir hareket yapmamak için kasar, zengin ailelerin zorbacı çocuklarına ses çıkaramaz, sınıfındaki fakir zengin ayrımını görüp hiyerarşideki kendi “konumuna” göre hareket etmeye başlar. Para karşılığında zengin aile çocuklarının zorbacı tavırlarının görmezden gelinmesi öğretmenin de hayata karşı duruşunu sorgulatır. Öğretmenin kendi değerlerinin, okulun aldığı idari kararlar sonucu yozlaşması da zaten okulun kuruluş amacını saptırır. Ahlak, eğitim, kültür yuvası niteliklerini sorgulatır. İşte bu sebeplerden dolayı zorba çocukların ailelerine para cezası kesmek yerine farklı caydırı uygulamalar olmalıdır. Doğruluğunu tartışmak gerekse de, örneğin, 3 ikazdan sonra zorbacının okuldan atılması para cezasından daha yapıcı bir uygulama olabilir."
    },
    {
        id : 2,
        title : "Hayattaki amacımız ne?",
        content : "Motivasyon videolarında çokça tekrarlanan bir laf vardır. ‘Follow your passion’ yani ‘Tutkulu olduğun şeyin peşinden git.’ Bu durumda kişinin mutlu bir hayat geçirebilmesi için öncelikle tutkulu olduğu alanı, mesleği, hobiyi bulması gerekir. Kimileri doğuştan ne yapacağını bilerek doğar. Tamam biraz abarttım. Kimilerinin becerisi, tutkulu olduğu şey, kendini küçük yaşlarda belli eder. Örneğin Fazıl Say, Serena Williams, Ma Long… Daha doğrusu ailelerinin doğru dokunuşlarıyla erken yaşta kendi yollarını çizmeye başlarlar. Ama çoğumuz için durum böyle değildir. Tiyatroya, müziğe, spora, dansa küçük yaşlarda özendirilmemiş gençler devletimizin bahşettiği 12 yıllık eğitim hayatından sonra kendi ilgi alanları, zevkleri hakkında pek fazla keşif yapamadan mesleğini belirleyecek fakülteye girdiklerinde hayatı daha da fazla sorgulamaya başlıyorlar. Mesleklerini belirleyecek fakülte diyorum çünkü bizde alışılagelmiş yol bu. Böyle gelmiş, böyle gidiyor. Bu yolu değiştirmek bana mı kaldı? Hayır ama bu konu üstünde yazabilirim pek tabii. İdeal koşullarda; üniversitede bölüm değiştirmek, tıpı 4. seneden bırakıp mimarlığa geçiş yapmak, mühendislik okuyup meslekten soğuyup üstüne psikoloji okumak ve daha birçok farklı kombinasyon sıradışı bir yol gibi gelmemeli. Geliyorsa da kendimizi buna alıştırmalıyız. Çünkü insanlara farklı uğraşlar arasında keşif yapma hakkı vermeden bitirdikleri ilk bölümün mesleğini icra etmeye zorlarsak - psikolojik bir zorlamadan bahsediyorum - işinde isteksiz, mutsuz bir kitle yaratmış oluruz. Hayat amacını mesleğe bağlamış olmak da istemem doğrusu. Kişinin mesleği, hayatının büyük bir zamanını alacağı için kesinlikle kendisini memnun etmeli ama hayat amacını başlı başına doğru mesleği seçmiş olmak diye düşünemeyiz. Hayat amacı ölünce arkanda iz bırakabilmiş olmak mıdır? Yoksa yaşarken doya doya yaşayabilmek ve iz bırakmak konusunda kafanı yormamak mı? Ya da küçük anlardan zevk almak da olabilir. Küçük anlardan zevk almak sanırım en anlamlısı. Bir şarkıda da geçtiği gibi ‘Big love happens in the small moments.’ Mesela şu anda bilgisayar odasında en arkadaki bilgisayardan yazıyorum ve aynı zamanda Servet Hoca’nın 11GH ile dersi var. Önde Mehmethan, Görkem ve diğerleri şarkı açmışlar ben de o şarkının getirdiği ilhamdan yararlanarak yazıyorum aslında şu anda bu denemeyi. Ve bu durumdan memnunum, değişik bir şekilde mutlu hissettiren bir yanı da var bu durumun. Sanırım küçük anlardan zevk aldığımız sürece gittiğimiz yolun uzunluğu bizi pek yormuyor. Aslında sadece küçük anlardan zevk almak da hayattaki amacımızı doldurmaya yetmez. Bir hedef peşine koşmak da insanı yormaz, yani yorar ama mutlu bir yorgunluk verir. Kendi ideallerin doğrultusunda başını eğmeden yaşadığını fark edince zaten kendinle gurur duymak da başlıyor. Uzun lafın kısası, hayattaki amacımız nedir nasıl bulunur bilmiyorum ama şimdiki anın farkında olmak ve getirdiği duyguların tadını çıkarmak, farklı şeyler denemek ve her denediğimiz şeyden ders çıkarmak hayattaki amacımızı fark etmemizi (?) kolaylaştırabilir diye düşünüyorum."

    },
    {
        id  : 3,
        title : "Annesi ya da Babası Kılıklı Olmak",
        content : "Çocuğunu büyütmek için çaba gösteren ailelerde çocukla anne baba arasındaki ilişki hakkında birkaç çıkarımımı paylaşmak isterim. Çocuk derken 18 yaşından küçük insanlardan bahsediyorum. Ebeveynler çocukları için en iyisini ister. Genelgeçer bir doğru değildir bu ama genelde en iyisini isterler. Bazen ise çocuklarını büyütürken yaptıkları hatalardan çocukları etkilenir. Daha da kötüsü, kendi kötü huylarını çocuklarına da aktarırlar ve kişi büyüdüğünde annesinin sevmediği bir yönünü örnek aldığını fark edince şaşırır, üzülür belki sinirlenir. Genellemelerle konuşuyorum ama bunlar sadece benim deneyimlerim. Herkes böyle bir tepki verir diyemem. "

    },
    {
        id : 4,
        title : "Masa Tenisi Üzerine",
        content : "Masa tenisi kendi kanaatimce oldukça keyifli bir uğraştır. Keyifli olmasının birçok sebebi var. İlk olarak masa tenisi, bir buz patenine nazaran, her yaşta öğrenilebilir. Buz patenini belli bir yaştan sonra öğrenemeyiz demiyorum ama sporun nişini becerebilmemiz için erken yaşlarda başlamalı insan buz patenine. Oysaki masa tenisini 40 yaşından sonra hobi olarak çok güzel oynayan insanlar tanıyorum. Bireysel bir spor olması da onu kolay elde edilebilir hobilerden biri yapıyor. Örneğin 25 yaşındaki bir bireyin kendi yaş grubuna uygun bir voleybol kursu bulma ihtimali pek yüksek değilken, bir bireysel antrenör ile masa tenisine adım atabilir. Oyun özellikle el göz koordinasyonunu, diğer çoğu spor dalı gibi, geliştirir. Zaten kişi ilk başladığında raketi eline almadan önce topu tek elle havaya atıp tutma çalışmaları yapar bir süre. Artık 300. atıştan sonra yorulan kaslar biraz dinlendirilir ve birkaç set daha aynı çalışma yapılır. Ne zaman bitecek bu çile derken elinize bir raket verilir ve ‘Yaşasın sonunda masaya geçiyorum’ dersiniz fakat sizi birkaç set ‘gölgeleme’ çalışması beklemektedir. Bu alıştırmanın temelinde kişinin hareketi kas hafızasına yazmak yatar. Sanki masa ve top varmışçasına forehand ve backhand alıştırması yaparsınız. En sonunda masanın başına geçtiğinizde içinizi bir mutluluk kaplar, kursa yazılmanızın 4. haftasında nihayet bir masa bir top ve bir raketle antrenmandasınızdır. Antrenörün atacağı tüm topları karşıya doğru şekilde göndereceğim diye düşünürken gelen 30 topdan sadece 5 ini karşılayabilmişinizdir… Bu hayal kırıklığı bir süre böyle gider fakat sonra diğer oyuncuları izleyerek biraz gaza gelirsiniz ve evde YouTube videolarında taktik kapmaya çalışırsınız… Uzun lafın kısası masa tenisini öğrenmeye çalışmak eğlencelidir. Sırtınızdan terler akana kadar çalıştığınız süre - yani yaklaşık 2 saat - size sadece yarım saat gibi gelir. Masa tenisi bir yana, diğer spor dallarının da birçok getirisi ve eğlencesi vardır ama hepsinin ortak faydası insan özgüven kazandırması olabilir. Kendinizi masa tenisi topluluğunun, ya da kendi ilgilendiğiniz dalın topluluğunun, bir parçası olarak görürsünüz ve bu aidiyet duygusu insana özgüven verir. "
    },
    {
        id : 5,
        title : "Kendini Aldatmak Üzerine",
        content : "Bir sözü karşıdakine mi vermeliyiz yoksa kendimize mi? Bence insan kendisine söz vermeli. Kendisine vermek istemediği sözü de kimseye vermemeli. Çünkü başkalarına saygı duyabilmek için önce kendimize saygı duymalıyız ve bu saygıyı göstermenin bir yolu da kendimize verilen sözleri tutmaktır. Çünkü insan daha kendisine dürüst olamazken çevresiyle ilişkilerinde ne kadar tutarlı bir tavır takınabilir ki? Bu hayatta en çok kendimize karşı sorumlu değil miyiz? Kendimizle ne kadar barışık, ne kadar iyi arkadaş olursak dış ilişkilerimiz de buna göre şekillenir. Kendimizi aldatırsak, etrafımıza da pek dürüst insanları çekemeyiz. Çünkü dürüst ve tutarlı insanlar bilir ki bir kişi başkasına yalan söylüyorsa, gün gelir o kişi bu dürüst insana da yalan söyler. Güzel bir laf vardır, ‘Doğruyu söylemenin güzel yanı bir kere söyleyip kurtulmaktır’ diye. Gerçekten de öyle insan kendisiyle doğru dürüst konuşunca belki canı sıkılır, belki kendine kızar, belki öfkelenir, belki ağlar ama sonuçta problemi inkar etmez, kabul etmiştir ve bu sayede bir sonraki aşamaya geçebilir: problemi çözmeye çalışmak. Kısaca farkındalık kazanabilmek için insan kendine dürüst davranmalıdır. Bu görüşe pek çok kişi katılır ama uygulamaya koymak göründüğünden zordur. Ben de itiraf etmeliyim ki, görece basit meselelerde kendime dürüst olsam da derin konularda ‘kendimi karşıma alıp’ adamakıllı konuşmam zaman alır. Önce kurban psikolojisine kapılırım mesela, sonra bu psikolojiye girdiğimi fark ederim ve daha geniş bir gözlükten bakarım. Anneme anlatırım problemi; o da beni dinler, bazen yön verir, bazen sadece soru sorar (Pisagor gibi). Bir süre sonra, beni üzse de problemin bende olduğunu fark ederim. Bu problem hakkında da bir deneme yazmadan duramam :) Ama bildiğim bir şey varsa o da şudur ki insan kendisine karşı farkındalığını arttırdığında problemleri yavaş yavaş ortadan kalkıyor, sanki yılanlar gibi deri değiştirmiş gibi hissediyor çünkü artık temelinde aynı sebep yatan farklı olaylara karşı verdiği eski tepkilerin tuzağına düşmüyor… Çünkü artık o farkında!"
    }, 
    {
        id : 6,
        title : "Hayır Demek Üzerine",
        content : "Hayır demeyi insan öyle ya da böyle öğrenmelidir. Öbür türlü harcanır, erken yorulur, zararı kendine olur. Bu yetenek üniversiteye gitmeden önce kazanılmalıdır kendi kanaatimce. Üniversiteye henüz gitmemiş biri olarak ve üniversite ortamını tanıdıklardan ve videolardan gözlemlemiş biri olarak hayır demeyi ne kadar erken öprenirsek o kadar iyi diye düşünüyorum. Kimi insanlar hayır diyememeyi çok yardımsever olmakla açıklayabilir fakat kendilerini kandırıyor olma ihtimalleri yüksektir. Bu dünyada insan önce kendisini düşünmeliyse hayır da diyebilmeli ve karşısındaki üzülürmüş, ağlarmış bunlara takılmamalı. En basit mantıkla, karşıdakini rahat ettirmek için neden kendi rahatımızdan olalım ki değil mi? Ne zaman ne kadar fedakarlık yapılacağının dengesini de ayarlamak lazım çünkü bu olayın iki ucu da olumsyuz sonuçlara yol açabiliyor. Eğer az önceki soruya her zaman ‘evet’ diyorsanız biraz anlayışsız, kibirli bir insan olabilirsiniz - tabii bu iki huyun ölçütü sadece bu soruyla belirlenemez. Eğer soruya her zaman ‘hayır, rahatımı bozmamda bir sakınca yok’ diyorsanız da bir ütopyada yaşamadığınız sürece insanlar sizi kullanır. Ben bu çıkarımları daha üniversiteye bile başlamadan yaptıysam ya biraz abartıyorum ya da ‘insanları kullanmak, merhametsizlik, kibir…’ gibi olaylar ve tavırlar küçük yaş grupları arasında da kendini gösteriyor. Nasıl hayır diyeceğimizi öğrenmeye gelirsek bu konuda yazılmış birçok kitap var, örneğin ‘Hayır Diyebilme Sanatı’ bunlardan biri, bunun yanında etrafımızda hayır deme dengesini tutturmuş insanları gözlemleyip sorular sorabiliriz. Üzerine düşündükçe daha birçok yol çıkacaktır."

    },
    {
        id : 7,
        title : "Uyumaya Hazırlanmak",
        content : "Bir gece rutini tutturmuş olmak önemlidir. Gün içinde yaptığımız her işin üzerine düşünmeyiz, örneğin sabah kalkınca yüzümü yıkasam mı yıkamasam mı diye düşünmezsiniz. Bu sizin sabah rutininize girmiştir ve sorgulamadan uygularsınız. Sabah rutini ne kadar zenginse güne o kadar zinde başlarsınız, en azından bu benim için böyledir. Aynı alışkanlıkları akşam saatine de uyarlamak bence uyku kalitemizi artırmak için önemlidir. Örneğin yatmadan önce kitap okumak, YouTube’da gezinmekten daha faydalı olacaktır çünkü radrasyondan uzak kalarak vücudunuzun siz uyurken melatonin salgılamasına olanak sağlarsınız. Bunun yanında bir rutine uygun hareket etmek de bence günlük hayatımıza anlam katar. Günlük planımızı daha kolay çizeriz. Kendi sağlığımızın kontrolünü biraz daha ellerimize alırız. Peki faydalarından bahsettik, sence nasıl bir akşam rutini olmalı konusuna gelirsek… Şahsen ben yatmadan en az yarım saat önce elektronik aygıtlardan uzak kalmayı yeğliyorum. Bundan önce ise bilgisayarımı kapatmadan dijital günlüğümü doldururum ve sonrasında dişlerimi fırçalarım. Kalan yarım saatte de kitap okurum, bazen yarım saat 40 dk olur, bazen 1 saat olur ama kitabı elime aldığımda benim için gün bitmiştir. Herkesin bünyesi farklı olduğundan aslında erken yaşlarda kendimize uygun bir akşam rutini tutturmak bizim için bir avantaj olabilir."
    }

];

app.get("/", function(req, res) {
    res.render("index", {allArticles : articles});
  });


app.get("/makale/:postID", function(req, res) {
    const id = req.params.postID;
    const article = articles[id];
    res.render("post", {article: article});
})

app.listen(3000, function() {
    console.log("Server started on port 3000.");
  })