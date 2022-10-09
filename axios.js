import axios from 'axios-https-proxy-fix'
let url = 'http://api.bilibili.com/x/web-interface/search/all/v2'

let cookie = "buvid3=13331C22-85E9-418A-975F-37293B1D817A13421infoc; rpdid=|(JYl)))lJ)|0J'uYumlk)uJR; video_page_version=v_old_home; CURRENT_BLACKGAP=0; blackside_state=0; i-wanna-go-back=-1; nostalgia_conf=-1; LIVE_BUVID=AUTO3316501181950020; hit-dyn-v2=1; _uuid=8DCF784E-C1AF-B1F10-E447-FAB5DBC7CACF71362infoc; buvid_fp_plain=undefined; DedeUserID=286481434; DedeUserID__ckMd5=698b414263ee7601; buvid_fp=2c1ae1fd5eac14f86f06f7ba3d75c95f; b_ut=5; CURRENT_QUALITY=80; buvid4=6527963C-90E4-424C-927F-C08E081F3C5E98157-022012713-Gi/v/ckjKgfxCIZSIhUw1w==; b_nut=100; fingerprint3=be77c08bfacee0a5ffef4be2e227de36; fingerprint=ca2058947a9defa287377c56585e7ae1; PVID=1; b_lsid=6395AA9B_183ABCB454A; bsource=search_baidu; SESSDATA=5f432d71,1680586579,18a3c*a1; bili_jct=622c29b08e1b44572465c2230243e376; sid=82mdx866; innersign=1; CURRENT_FNVAL=16; bp_video_offset_286481434=713783621575508100";

axios.get(url, {
    params: {
        "keyword": "蔡徐坤"
    },
    headers: {
        'Cookie': cookie,

        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.34",

        "Referer": "https://search.bilibili.com/all?keyword=%E5%8A%A9%E5%8A%9B%E8%87%AA%E8%A1%8C%E8%BD%A6&from_source=webtop_search&spm_id_from=333.1007&search_source=3",


        "accept": "application/json, text/plain, */*"

    }
}).then(res=>console.log(res.data.data.result[10]));