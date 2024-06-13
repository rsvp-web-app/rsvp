// ターゲットとノンターゲット画像のパスを配列に格納する
let targetImages =[];//['./target/cola_29.jpeg']; 
//, './target/cola_0.jpeg', './target/cola_13.jpeg', './target/cola_25.jpeg', './target/cola_24.jpeg', './target/cola_32.jpeg', './target/cola_12.jpeg', './target/cola_1.jpeg', './target/cola_28.jpeg', './target/cola_23.jpeg', './target/cola_19.jpeg', './target/cola_6.jpeg', './target/cola_15.jpeg', './target/cola_14.jpeg', './target/cola_7.jpeg', './target/cola_18.jpeg', './target/cola_22.jpeg', './target/cola_8.jpeg', './target/cola_21.jpeg', './target/cola_17.jpeg', './target/cola_4.jpeg', './target/cola_5.jpeg', './target/cola_16.jpeg', './target/cola_20.jpeg', './target/cola_9.jpeg', './target/cola_11.jpeg', './target/cola_2.jpeg', './target/cola_27.jpeg', './target/cola_31.jpeg', './target/cola_30.jpeg', './target/cola_26.jpeg', './target/cola_3.jpeg', './target/cola_10.jpeg'];
let nontargetImages = [];//['./nontarget/ad_60.jpeg'];
//, './nontarget/ad_37.jpeg', './nontarget/ad_222.jpeg', './nontarget/ad_21.jpeg', './nontarget/ad_99.jpeg', './nontarget/ad_76.jpeg', './nontarget/ad_131.jpeg', './nontarget/ad_218.jpeg', './nontarget/ad_189.jpeg', './nontarget/ad_166.jpeg', './nontarget/ad_170.jpeg', './nontarget/ad_127.jpeg', './nontarget/ad_83.jpeg', './nontarget/ad_150.jpeg', './nontarget/ad_107.jpeg', './nontarget/ad_111.jpeg', './nontarget/ad_95.jpeg', './nontarget/ad_146.jpeg', './nontarget/ad_214.jpeg', './nontarget/ad_56.jpeg', './nontarget/ad_185.jpeg', './nontarget/ad_40.jpeg', './nontarget/ad_193.jpeg', './nontarget/ad_17.jpeg', './nontarget/ad_202.jpeg', './nontarget/ad_0.jpeg', './nontarget/ad_16.jpeg', './nontarget/ad_203.jpeg', './nontarget/ad_1.jpeg', './nontarget/ad_192.jpeg', './nontarget/ad_41.jpeg', './nontarget/ad_184.jpeg', './nontarget/ad_57.jpeg', './nontarget/ad_215.jpeg', './nontarget/ad_147.jpeg', './nontarget/ad_94.jpeg', './nontarget/ad_110.jpeg', './nontarget/ad_106.jpeg', './nontarget/ad_151.jpeg', './nontarget/ad_82.jpeg', './nontarget/ad_126.jpeg', './nontarget/ad_171.jpeg', './nontarget/ad_188.jpeg', './nontarget/ad_167.jpeg', './nontarget/ad_219.jpeg', './nontarget/ad_130.jpeg', './nontarget/ad_98.jpeg', './nontarget/ad_77.jpeg', './nontarget/ad_20.jpeg', './nontarget/ad_36.jpeg', './nontarget/ad_223.jpeg', './nontarget/ad_61.jpeg', './nontarget/ad_85.jpeg', './nontarget/ad_156.jpeg', './nontarget/ad_228.jpeg', './nontarget/ad_101.jpeg', './nontarget/ad_117.jpeg', './nontarget/ad_93.jpeg', './nontarget/ad_140.jpeg', './nontarget/ad_212.jpeg', './nontarget/ad_50.jpeg', './nontarget/ad_183.jpeg', './nontarget/ad_46.jpeg', './nontarget/ad_195.jpeg', './nontarget/ad_204.jpeg', './nontarget/ad_11.jpeg', './nontarget/ad_6.jpeg', './nontarget/ad_89.jpeg', './nontarget/ad_66.jpeg', './nontarget/ad_224.jpeg', './nontarget/ad_31.jpeg', './nontarget/ad_27.jpeg', './nontarget/ad_232.jpeg', './nontarget/ad_70.jpeg', './nontarget/ad_137.jpeg', './nontarget/ad_160.jpeg', './nontarget/ad_199.jpeg', './nontarget/ad_176.jpeg', './nontarget/ad_121.jpeg', './nontarget/ad_208.jpeg', './nontarget/ad_209.jpeg', './nontarget/ad_120.jpeg', './nontarget/ad_198.jpeg', './nontarget/ad_177.jpeg', './nontarget/ad_161.jpeg', './nontarget/ad_136.jpeg', './nontarget/ad_71.jpeg', './nontarget/ad_26.jpeg', './nontarget/ad_225.jpeg', './nontarget/ad_30.jpeg', './nontarget/ad_88.jpeg', './nontarget/ad_67.jpeg', './nontarget/ad_205.jpeg', './nontarget/ad_10.jpeg', './nontarget/ad_7.jpeg', './nontarget/ad_194.jpeg', './nontarget/ad_47.jpeg', './nontarget/ad_182.jpeg', './nontarget/ad_51.jpeg', './nontarget/ad_213.jpeg', './nontarget/ad_141.jpeg', './nontarget/ad_92.jpeg', './nontarget/ad_116.jpeg', './nontarget/ad_100.jpeg', './nontarget/ad_229.jpeg', './nontarget/ad_157.jpeg', './nontarget/ad_84.jpeg', './nontarget/ad_4.jpeg', './nontarget/ad_13.jpeg', './nontarget/ad_206.jpeg', './nontarget/ad_178.jpeg', './nontarget/ad_197.jpeg', './nontarget/ad_44.jpeg', './nontarget/ad_181.jpeg', './nontarget/ad_52.jpeg', './nontarget/ad_139.jpeg', './nontarget/ad_210.jpeg', './nontarget/ad_142.jpeg', './nontarget/ad_91.jpeg', './nontarget/ad_115.jpeg', './nontarget/ad_29.jpeg', './nontarget/ad_103.jpeg', './nontarget/ad_154.jpeg', './nontarget/ad_68.jpeg', './nontarget/ad_87.jpeg', './nontarget/ad_8.jpeg', './nontarget/ad_123.jpeg', './nontarget/ad_48.jpeg', './nontarget/ad_174.jpeg', './nontarget/ad_162.jpeg', './nontarget/ad_135.jpeg', './nontarget/ad_72.jpeg', './nontarget/ad_230.jpeg', './nontarget/ad_25.jpeg', './nontarget/ad_119.jpeg', './nontarget/ad_33.jpeg', './nontarget/ad_226.jpeg', './nontarget/ad_64.jpeg', './nontarget/ad_158.jpeg', './nontarget/ad_159.jpeg', './nontarget/ad_65.jpeg', './nontarget/ad_32.jpeg', './nontarget/ad_227.jpeg', './nontarget/ad_118.jpeg', './nontarget/ad_231.jpeg', './nontarget/ad_24.jpeg', './nontarget/ad_73.jpeg', './nontarget/ad_134.jpeg', './nontarget/ad_163.jpeg', './nontarget/ad_175.jpeg', './nontarget/ad_49.jpeg', './nontarget/ad_122.jpeg', './nontarget/ad_9.jpeg', './nontarget/ad_69.jpeg', './nontarget/ad_86.jpeg', './nontarget/ad_155.jpeg', './nontarget/ad_102.jpeg', './nontarget/ad_28.jpeg', './nontarget/ad_114.jpeg', './nontarget/ad_90.jpeg', './nontarget/ad_143.jpeg', './nontarget/ad_211.jpeg', './nontarget/ad_138.jpeg', './nontarget/ad_53.jpeg', './nontarget/ad_180.jpeg', './nontarget/ad_45.jpeg', './nontarget/ad_179.jpeg', './nontarget/ad_196.jpeg', './nontarget/ad_5.jpeg', './nontarget/ad_12.jpeg', './nontarget/ad_207.jpeg', './nontarget/ad_19.jpeg', './nontarget/ad_125.jpeg', './nontarget/ad_172.jpeg', './nontarget/ad_58.jpeg', './nontarget/ad_164.jpeg', './nontarget/ad_133.jpeg', './nontarget/ad_74.jpeg', './nontarget/ad_148.jpeg', './nontarget/ad_23.jpeg', './nontarget/ad_220.jpeg', './nontarget/ad_35.jpeg', './nontarget/ad_109.jpeg', './nontarget/ad_62.jpeg', './nontarget/ad_129.jpeg', './nontarget/ad_2.jpeg', './nontarget/ad_200.jpeg', './nontarget/ad_15.jpeg', './nontarget/ad_191.jpeg', './nontarget/ad_42.jpeg', './nontarget/ad_168.jpeg', './nontarget/ad_187.jpeg', './nontarget/ad_54.jpeg', './nontarget/ad_216.jpeg', './nontarget/ad_144.jpeg', './nontarget/ad_78.jpeg', './nontarget/ad_97.jpeg', './nontarget/ad_113.jpeg', './nontarget/ad_105.jpeg', './nontarget/ad_39.jpeg', './nontarget/ad_152.jpeg', './nontarget/ad_81.jpeg', './nontarget/ad_80.jpeg', './nontarget/ad_153.jpeg', './nontarget/ad_38.jpeg', './nontarget/ad_104.jpeg', './nontarget/ad_112.jpeg', './nontarget/ad_79.jpeg', './nontarget/ad_96.jpeg', './nontarget/ad_145.jpeg', './nontarget/ad_217.jpeg', './nontarget/ad_55.jpeg', './nontarget/ad_169.jpeg', './nontarget/ad_186.jpeg', './nontarget/ad_43.jpeg', './nontarget/ad_190.jpeg', './nontarget/ad_3.jpeg', './nontarget/ad_201.jpeg', './nontarget/ad_14.jpeg', './nontarget/ad_128.jpeg', './nontarget/ad_63.jpeg', './nontarget/ad_108.jpeg', './nontarget/ad_221.jpeg', './nontarget/ad_34.jpeg', './nontarget/ad_22.jpeg', './nontarget/ad_149.jpeg', './nontarget/ad_75.jpeg', './nontarget/ad_132.jpeg', './nontarget/ad_165.jpeg', './nontarget/ad_59.jpeg', './nontarget/ad_173.jpeg', './nontarget/ad_124.jpeg', './nontarget/ad_18.jpeg'];
const otherImages=['./otherimage/stable.png','./otherimage/trigger.png','./otherimage/nontrigger.png','./otherimage/black.png']




// 画像表示の設定

let frameRate = 3; // 3Hz
let frameDuration = 1000 / frameRate; // フレーム間隔(ミリ秒)
let tshowNum=1;
let ntshowNum=1;

let imageList=[];
// 画像を表示する配列を作成する

let selecttargetImages =[];
let selectnontargetImages = [];

let targetLen=0;
let nontargetLen=0;

let imageOrder = [];
let stable_t=1000
let isShuffle;







function getImages(imlist){
    for (i = 0; i < imlist.length; i++){
        var img = document.createElement('img');
        img.src = imlist[i];
    }
}




function openFullscreen() {
    const elem = document.documentElement; // もしくは特定の要素を指定
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

// function generateNonConsecutiveArray(nontargetLen, targetLen) {
//     let Order;
//     let hasConsecutiveOnes;

//     do {
//         Order = [];
//         for (let i = 0; i < nontargetLen; i++) {
//             Order.push(0);
//         }
//         for (let i = 0; i < targetLen; i++) {
//             Order.push(1);
//         }
//         shuffleArray(Order);

//         hasConsecutiveOnes = false;
//         let prevValue = null;
//         for (let i = 0; i < Order.length; i++) {
//             const currentValue = Order[i];
//             if (currentValue === 1 && currentValue === prevValue) {
//                 hasConsecutiveOnes = true;
//                 break;
//             }
//             prevValue = currentValue;
//         }
//     } while (hasConsecutiveOnes);

//     return Order;
// }



function generateNonConsecutiveArray(nontargetLen, targetLen) {
    let Order=[];
    if(isShuffle){
        if(targetLen>nontargetLen){
            console.log("nontargetLen is more than targetLen");
            return
        }

        for (let i = 0; i <  targetLen*2-1; i++) {
            if (i%2===0){
                Order.push(1);

            }else{
                Order.push(0);
            }
        }
        console.log("order1:",Order);

        let max=Order.length;
        let min=0;
        for(let i =0;i<nontargetLen-targetLen+1;i++){
            let randomIndex = Math.floor(Math.random() * (max - min) + min);
            // console.log(randomIndex);
            Order.splice(randomIndex,0,0)
        }
    }else{
        for (let i = 0; i <  targetLen; i++) {
            Order.push(1);
        }
        for (let i = 0; i <  nontargetLen; i++) {
            Order.push(0);
        }
        shuffleArray(Order);
    }
    console.log("order2:",Order);

    return Order;
}





function displayImages() {

    openFullscreen(); 
    let imageIndex = 0;
    let t_index=0;
    let nt_index=0;
    let imageSrc;
    


    stable();
    trigger();
    //  安静時トリガを表示
    setTimeout(nontrigger, stable_t);

    function showNextImage() {

        if (imageIndex >= imageOrder.length) {
            // 全ての画像を表示し終えた場合は終了
            main_iamge(otherImages[3]);
            setTimeout(saveData,1000);
            return;
        }

        const isTarget = imageOrder[imageIndex] === 1;
        // console.log('Displaying isTarget:', isTarget); 
        if(isTarget){
            imageSrc = selecttargetImages[t_index];
            t_index++;
        }else{
            imageSrc = selectnontargetImages[nt_index];
            nt_index++;
        }
        
        // console.log('Displaying image:', imageSrc); // 表示する画像のパスをコンソールに出力

        main_iamge(imageSrc.url);
        trigger();
        setTimeout(nontrigger, frameDuration/2);
        imageIndex++;

        imageList.push(imageSrc.name);
        setTimeout(showNextImage, frameDuration);
    }



    setTimeout(showNextImage,stable_t+1000);

    //最後の画像が表示された後，トリガを消す
    setTimeout(nontrigger, frameDuration/2);
}


function main_iamge(imsrc){
    const imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.src = imsrc;
}

function trigger(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = otherImages[1];
}

function nontrigger(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = otherImages[2];
}
function stable(){
    const imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.src = otherImages[0];
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function saveData(){
    document.exitFullscreen();
    document.getElementById('imageDisplay').style.display = 'none';
    document.getElementById('csvSave').style.display = 'block';

    document.getElementById('csvSave').addEventListener('click', function(){
        let data ="";
        for (let i =0;i<imageOrder.length;i++){
            data+=imageOrder[i]+","+imageList[i]+"\r";
        }
        
        
        
        ////////////////////CSV形式へ変換////////////////////
        // BOMを付与（Excelで開いた際のの文字化け対策）
        const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
        // CSV用バイナリデータを作成
        const blob = new Blob([bom, data], { type: "text/csv" });
        // blobからオブジェクトURLを作成
        const objectUrl = URL.createObjectURL(blob);
        
        ////////////////////ダウンロードリンクの作成とクリック////////////////////
        // ダウンロードリンクを作成 ※HTMLのaタグを作成
        const downloadLink = document.createElement("a");
        // ファイル名の設定
        const fileName = "event_id.csv";
        downloadLink.download = fileName;
        // ダウンロードファイルを設定 ※aタグのhref属性
        downloadLink.href = objectUrl;
        
        // ダウンロードリンクを擬似的にクリック
        downloadLink.click();
        
        // ダウンロードリンクを削除
        downloadLink.remove();
    });
}







document.getElementById('csvSave').style.display = 'none';
document.getElementById('button2').style.display = 'none';
window.addEventListener('load', function(){

    document.getElementById('targetInput').addEventListener('change', function(event) {
        targetImages = Array.from(event.target.files).map(file => ({
            url: URL.createObjectURL(file),
            name: file.name
        }));

        document.getElementById('targetCount').textContent = `ターゲット画像: ${targetImages.length} 枚`;
    });
    
    document.getElementById('nontargetInput').addEventListener('change', function(event) {
        nontargetImages = Array.from(event.target.files).map(file => ({
            url: URL.createObjectURL(file),
            name: file.name
        }));
        document.getElementById('nontargetCount').textContent = `ノンターゲット画像: ${nontargetImages.length} 枚`;
    });
    

    document.getElementById('button1').addEventListener('click', function(){
        document.body.requestFullscreen().then(() => {
            document.getElementById('button1').style.display = 'none'; // ボタンを非表示

            document.getElementById('targetInput').style.display = 'none';
            document.getElementById('nontargetInput').style.display = 'none';
            document.getElementById('targetCount').style.display = 'none';
            document.getElementById('nontargetCount').style.display = 'none';
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.value_container').style.display = 'none';
            document.querySelector('.check_container').style.display = 'none';
            document.querySelector('.title').style.display = 'none';

            document.getElementById('button2').style.display = 'block';

            


            tshowNum = parseInt(document.getElementById('targetCount').value,10);
            ntshowNum = parseInt(document.getElementById('nontargetCount').value,10);
            stable_t = parseInt(document.getElementById('stable_time').value,10)*1000;
            isShuffle = document.getElementById('isShuffle').checked;
            frameRate = parseInt(document.getElementById('freq').value,10);
            frameDuration = 1000 / frameRate; // フレーム間隔(ミリ秒)

            console.log(isShuffle);

            selecttargetImages = Array(tshowNum).fill(targetImages).flat();
            selectnontargetImages = Array(ntshowNum).fill(nontargetImages).flat();

            targetLen = targetImages.length * tshowNum;
            nontargetLen = nontargetImages.length * ntshowNum;
            imageOrder = generateNonConsecutiveArray(nontargetLen, targetLen);
            console.log('Shuffled Array:', imageOrder);

            console.log('select targetArray:',selecttargetImages);    
            console.log('select nontargetArray:',selectnontargetImages);


            shuffleArray(selecttargetImages);
            shuffleArray(selectnontargetImages);

        });
    });

    document.getElementById('button2').addEventListener('click', function(){
        // document.exitFullscreen();
        document.getElementById('button2').style.display = 'none'; // ボタンを非表示
        requestAnimationFrame(displayImages); // フルスクリーンに入ったら画像表示を開始

    });
});



