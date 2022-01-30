function checkLoveNo(){
    var notify = `
                <div class="notify">
                    <h2>
                        Ơ ơ sao bé lại chọn vào mục này (づ◡﹏◡)づ
                        Kì cục ghê, quánh cho 1 cái giờ!!
                    </h2>
                </div>
                `
    document.getElementById("wrapper").innerHTML = notify;
    var angry = `
        <div class="container">
            <div id="caHoi1">
                <h3 class="title">
                    Cái đồ người yêu Ngu Ngốc
                </h3>
            <div class="image">
                <img src="./asset/image/tucgian.jpg" alt="">
            </div>
            <div class="nav" >
            <a href="./index.html" class="title text-white">
                Ấn vào dòng này để bé được chọn lại ! 
            </a>
            </div>
        </div>
            `
        setTimeout(() => {
            document.getElementById("wrapper").innerHTML = angry;
        }, 6000);

}
var happy;
function checkLoveYes() {
    happy = `
            <div class="container1">
                <div class="header" >
                    <h3 class="title">
                        Trả lời một số câu hỏi này nha bé.
                    </h3>
                </div>
                <div id="main" >
                     <div class="content" >
                        <label class="content-label">Tên đầy đủ của người yêu Bắp là gì?</label>
                        <input class="content-input" type="text" name="tennguoiyeu" placeholder="Nguyễn Văn A" id="tendaydu"  value="" >
                    </div>
                    <div class="content" >
                        <label for="birthday">Ngày hai đứa chính thức yêu nhau</label>
                        <input class="content-input" type="text" name="loveday" placeholder="vd : 01/01/2021" id="loveday"  value="" >
                    </div>
                    <div class="content" >
                        <label class="content-label">Hai đứa đã hứa là sẽ cùng nhau đi tỉnh nào?</label>
                        <input class="content-input" type="text" name="tinhdichoi" placeholder="vd : Nam Định" id="loveplace"  value="" >
                    </div>
                    <div class="content" >
                        <label class="content-label">Bé Bắp có yêu anh nhiều không?
                        <br>
                            Trả lời là : "Yes/No"
                        </label>
                        <input class="content-input" type="text" name="love" placeholder="vd : Yes/No" id="love"  value="" >
                    </div>
                    <div id="bt2">
                        <input id="traloi" type="button" value="Hãy trả lòi đúng á nhen" onclick="question();">
                    </div>
                </div>
            </div>
                `
    document.getElementById("wrapper").innerHTML = happy;
}

function question() {
    var flag = 1
    if(document.getElementById("tendaydu").value.toLowerCase()=="nguyễn ngọc đính"){
        if(document.getElementById("loveday").value=="06/07/2021"){
            if(document.getElementById("loveplace").value.toLowerCase()=="đà lạt"){
                if(document.getElementById("love").value.toLowerCase()=="yes"){
                    flag = 0;
                }
            }
        }
    }
    if(flag==1){
        document.getElementById("wrapper").innerHTML = `
        <div class="notify">
            <h2>
                Người yêu ngốc trả lời sai 1 câu nào đó rồi á, trả lời lại đi !!
                (×_×)⌒☆
            </h2>
        </div>
        `
        setTimeout(() => {
            // location.reload();
            document.getElementById("wrapper").innerHTML = happy;
        }, 3000);
    }else{
        var letter =
         `<div class="container2">
        <div class="header2" >
            <h3>
                Một chút tâm tình gửi bé những ngày cuối năm nhen ^^.
            </h3>
        </div>
        <div id="main" >
             <div class="content2" >
                <p>
                    
                    Cảm ơn bé, cảm ơn vì đã cho anh cơ hội để được yêu em. Anh nhớ bé, anh nhớ cảm giác anh được bé ngồi sau xe và ôm anh, anh nhớ nụ hôn của em, anh nhớ bàn tay nhỏ bé mềm mại của bé, anh nhớ cảm giác hai đứa quấn quít bên nhau,... nhớ tất cả mọi thứ về bé. Anh nhớ những khoảng thời gian dù ít ỏi nhưng hạnh phúc đó. Thời gian được ở cạnh em anh thấy anh thật may mắn, lúc anh gặp chuyện
                    em lúc nào cũng có mặt để để giúp đỡ anh, nào là anh chỉ nói anh đau bụng một chút thôi em cũng sốt sắn đi mua thuốc, anh bị covid em cũng
                    không ngại để mua đồ đứa cho anh... và còn nhiều nhiều thứ khác nữa. Nói chung là từ những lần đó, anh đã biết là anh đã yêu đúng người, anh yêu một người đôi khi hơi lì lợm chút nhưng lúc nào cũng yêu anh và hiểu chuyện, anh thương
                    bé nhiều lắm, thương bé nhiều cho nên sẽ không có MỘT ai có thể thay thế bé. Đôi lúc anh không đúng đắn trong tình yêu, anh mong là hai đưa sau khi 
                    cãi nhau thì cùng nhau ngồi nói ra mọi thứ để hiểu nhau hơn, như cái cách mà anh với bé đã từng làm. Anh chỉ có thể yêu em bằng tất cả những gì anh làm được. Nhưng anh sẽ cố gắng, cố gắng để tương lai có thể chịu trách nhiệm với những gì anhh đã làm với bé.
                     Anh viết xong dòng chắc là 2 giờ sáng ngày 31/1/2022 rồi, giờ này bé ngủ rồi vì anh mới nhắn tin nhưng bé chưa rep "HAHA". Lúc này ảnh chỉ có thể nói được với bé nhiêu đây thui, để sau này anh sẽ nói thiệt nhiều cho bé nghe nữa nha.
                    Thì bây giờ cũng qua được năm mới rồi, năm mới anh chỉ mong hai đứa cố gắng phát triển bản thân nữa, hai đứa sẽ yêu thương nhau nhiều hơn năm cũ, cùng nhau đi qua mọi thứ và luôn chia sẽ buồn vui cho nhau để hiểu nhau hơn .
                    Đặc biệt là năm mới bớt lì lại chút, nghe lời anh với yêu thương anh nhiều hơn nữa, luôn luôn xinh đẹp nữa nha, người iu anh thì lúc nào cũng tuyệt nhất trong trái tim anh rùi nhưng mà ở ngoài trái tim anhhh
                    cũng phải thật xinh đẹp đó nhan. Cảm ơn bé, cảm ơn bé vì đã luôn yêu anh. Duyên số đã cho anh gặp em... và việc anh với bé cần làm là vẽ nên một câu chuyện thật đẹp <3. Anh yêu em "Ngô Thị Hiền".
                    <br>
                    Nguyễn Ngọc Đính gửi người yêu xinh đẹp nhất trong tim của ảnh.

                </p>
            </div>
            </div>
            <div class="image">
                <img src="./asset/image/Bắp4.jpg" alt="">
            </div>
    </div>
        `
        document.getElementById("wrapper").innerHTML = letter;

    }
}

