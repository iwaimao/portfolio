
function getTickInterval(year){


    var table = {
            1:['1 months','%nカ月'],
            2:['4 months','%Y年%m月'],
            3:['9 months','%Y年%m月'],
            4:['1 years', '%Y年'],
            5:['1 years', '%Y年'],
            6:['1 years', '%Y年'],
            7:['2 years', '%Y年'],
            8:['2 years', '%Y年'],
            9:['2 years', '%Y年'],
            10:['2 years', '%d年'],
            11:['2 years', '%Y年'],
            12:['3 years', '%Y年'],
            13:['3 years', '%Y年'],
            14:['3 years', '%Y年'],
            15:['3 years', '%Y年'],
            16:['3 years', '%Y年'],
            17:['3 years', '%Y年'],
            18:['3 years', '%Y年'],
            19:['4 years', '%Y年'],
            20:['4 years', '%Y年'],
            21:['4 years', '%Y年'],
            22:['5 years', '%Y年'],
            23:['5 years', '%Y年'],
            24:['5 years', '%Y年'],
            25:['5 years', '%Y年'],
            26:['5 years', '%Y年'],
            27:['5 years', '%Y年'],
            28:['5 years', '%Y年'],
            29:['5 years', '%Y年'],
            30:['5 years', '%Y年'],

    }
    if( year in table){
        return table[year];
    }
    return [Math.ceil(year/6).toString() + ' years','%Y年'];

}
var dataIntervals = {
        1:['1','month'],
        2:['2','month'],
        3:['3','month'],
        4:['6', 'month'],
        5:['6', 'month'],
        6:['1', 'year'],
        7:['1', 'year'],
        8:['1', 'year'],
        9:['1', 'year'],
        10:['1', 'year'],
        11:['16', 'month'],
        12:['16', 'month'],
        13:['16', 'month'],
        14:['18', 'month'],
        15:['18', 'month'],
        16:['2', 'year'],
        17:['2', 'year'],
        18:['2', 'year'],
        19:['2', 'year'],
        20:['2', 'year'],
        21:['3', 'year'],
        22:['3', 'year'],
        23:['3', 'year'],
        24:['3', 'year'],
        25:['3', 'year'],
        26:['3', 'year'],
        27:['3', 'year'],
        28:['3', 'year'],
        29:['3', 'year'],
        30:['3', 'year'],
}

var TOTAL_COLOR = 'orenge';
var PROFIT_COLOR = '';
var PRINCIPAL_COLOR = '';
var barRenderOption = {
        //barWidth: 30,
        //barPadding: 30,
        //barMargin: 13,
        shadow: true,
        shadowDepth:2,
        shadowAlpha:0.04,
        fillToZero: true,
        highlightMouseDown: false,
        highlightMouseOver: false,
        animation:{
            speed: 1000
        }
}
var defaultLegend = {
        show: true,
        placement: 'inside',
        location: 'nw'
}
var defaultPointLabels = {
        show: true,
        location: 'n',
       formatString: "%'.1f万円"
    }

// mao 積み立て金額の入力チェック
function number_check(){
    let mao_number = document.getElementById('calc1_t').value;
    let err = document.getElementById('error_txt');
    let onclick = document.getElementById('onclick');
    let mao_min_number = 100;
    let mao_max_number = 33333;
    if(mao_min_number <= mao_number && mao_number <= mao_max_number ){
        err.style.display = 'none';
        console.log(onclick);
        onclick.setAttribute("onclick","calc1(); return false;");
    }else{
        err.style.display = 'block';
        onclick.removeAttribute("onclick");
    }
}
// let check_flug = false;
//最終積み立て金額を計算する
function calc1() {

    // mao * 10000 → 削除
    var t = parseFloat($('#calc1_t').val()) ;
    var r = parseFloat($('#calc1_r').val());
    var year = parseInt($('#calc1_n').val());
    var n = year * 12;
   // var tickInterval = getTickInterval(year);
    var payTotal = t*n;
    var ret = _calc1(t, n, r);

    $('#calc1_result').html(numberFormat(ret) + "円");
    var data = getChartData(t, n, r);
    var values = data.values;
    var ticks = data.ticks;
    if(jqPlotChart1) jqPlotChart1.destroy();
    var last = values[values.length-1][0];
    var principal = payTotal/10000;
    var profit = (ret-payTotal)/10000;
    var dataPrincipals = [];
    var dataProfits = []


    for(var i=0; i<values.length; i++){
        var n = values[i][0];
        var p = t*n/10000;
        dataPrincipals[i] = [n, p];
        dataProfits[i] = [n, values[i][1]- p];
    }
    var k = deleteBeforeLastOne(ticks, values);
    if(k > 0){
        dataPrincipals[k] = [n, ''];
        dataProfits[k] = [n, ''];
        values[k][1] = '';
    }


    barRenderOption['barMargin'] = values.length > 10 ? 10 : 20;
    jqPlotChart1 = $.jqplot(
            "result1_chart",
            [dataPrincipals, dataProfits, values],
             {
                stackSeries: true,
                legend: defaultLegend,
                series:[
                            {
                                label:"元本（" + principal.toFixed(1) + "万円）",
                                color:'#029683',
                                renderer: jQuery.jqplot.BarRenderer,
                                xaxis: 'xaxis',
                                yaxis: 'yaxis',
                                rendererOptions:barRenderOption,
                                pointLabels: defaultPointLabels
                            },
                            {
                                stackSeries: true,
                                label:"運用収益（" + profit.toFixed(1) + "万円）",
                                color:'#FDF396',
                                renderer: jQuery.jqplot.BarRenderer,
                                xaxis: 'xaxis',
                                yaxis: 'yaxis',
                                rendererOptions:barRenderOption,
                                pointLabels: defaultPointLabels
                            },
                            {
                                label:"金額の推移",
                                color:TOTAL_COLOR,
                                showMarker:false,
                                disableStack : true,
                                pointLabels: {
                                    show: true,
                                    location: 'n',
                                    formatString: "<span style='color:" + TOTAL_COLOR + "; '>%'.1f万円</span>",
                                    escapeHTML:false,
                                    ypadding:10
                                },
                                showLine:false,
                                lineWidth:1,
                                shadow:false
                            }
                        ],
                        animate: true,
                        title:'積立金額と運用成果',
                        seriesDefaults:{
                            rendererOptions: {
                                animation: {
                                    speed: 1000
                                }
                            },
                            lineWidth:0,
                        },
                        axes:{
                            xaxis:{
                                render:jQuery.jqplot.CategoryAxisRenderer,
                                ticks:ticks
                            },
                            yaxis:{
                                min:0,
                                tickOptions: { formatString: "%'d万円" }
                            }
                        }
            }
    );
    $("table.jqplot-table-legend tr td").css('padding-top','9px');

    $(window).on('resize',function(event) {
        jqPlotChart1.replot();
        $("table.jqplot-table-legend tr td").css('padding-top','9px');
    })
}

function _calc1(t, n, r) {
    // if( n== 0) return t;
    var ret = 0;
    if (r == 0) {
        ret = t * n;
    } else if (r > 0) {
        r = r / 1200;
        ret = (Math.pow(1 + r, n) - 1) / r * t;
    }
    return Math.round(ret);
}

// 毎月積み立て金額を計算する

var jqPlotChart1=null,jqPlotBar1=null,jqPlotChart2=null,jqPlotBar2=null;
var jqPlotChart3=null;
var jqPlotBar3=null;
function calc2() {
    var year = $('#calc2_n').val();
   // var tickInterval = getTickInterval(year);
    var n = year * 12;
    var r = parseFloat($('#calc2_r').val());
    var m = parseFloat($('#calc2_m').val()) * 10000;

    var ret = _calc2(n, r, m);

    $('#calc2_result').html(numberFormat(ret) + "円");
    var data = getChartData(ret, n, r);
    var values = data.values;
    var ticks = data.ticks;

    if(jqPlotChart2) jqPlotChart2.destroy();
    var payTotal = ret*n;
    var principal = payTotal/10000;
    var profit = (m-payTotal)/10000;

    var dataPrincipals = [];
    var dataProfits = []

    for(var i=0; i<values.length; i++){
        var n = values[i][0];
        var p = ret*n/10000;
        dataPrincipals[i] = [n, p];
        dataProfits[i] = [n, values[i][1]- p];
    }
    var k = deleteBeforeLastOne(ticks, values);
    if(k > 0){
        dataPrincipals[k] = [n, ''];
        dataProfits[k] = [n, ''];
        values[k][1] = '';
    }

    barRenderOption['barMargin'] = values.length > 10 ? 10 : 20;
    jqPlotChart2 = $.jqplot(
            "result2_chart",
            [dataPrincipals, dataProfits, values],
            {
                stackSeries: true,
                legend: defaultLegend,
                series:[{
                    label:"元本（" + principal.toFixed(1) + "万円）",
                    color:'#029683',
                    renderer: jQuery.jqplot.BarRenderer,
                    xaxis: 'xaxis',
                    yaxis: 'yaxis',
                    rendererOptions:barRenderOption,
                    pointLabels: defaultPointLabels
                },
                {
                    label:"運用収益（" + profit.toFixed(1) + "万円）",
                    color:'#FDF396',
                    renderer: jQuery.jqplot.BarRenderer,
                    xaxis: 'xaxis',
                    yaxis: 'yaxis',
                    rendererOptions:barRenderOption,
                    pointLabels: defaultPointLabels
                },
                {
                    label:"金額の推移",
                    color:TOTAL_COLOR,
                    showMarker:false,
                    disableStack : true,
                    pointLabels: {
                        show: true,
                        location: 'n',
                        formatString: "<span style='color:" + TOTAL_COLOR + ";'>%'.1f万円</span>",
                        escapeHTML:false,
                        ypadding:10
                    },
                    showLine:false,
                    lineWidth:1,
                    shadow:false
                }
                ],

                title:'積立金額と運用成果',
                seriesDefaults:{
                    rendererOptions: {
                        animation: {
                            speed: 1000
                        }
                    }
                },
                animate: true,
                axes:{
                    xaxis:{
                        renderer: jQuery.jqplot.DateAxisRenderer,
                        ticks:ticks
                    },
                    yaxis:{
                        min:0,
                        tickOptions: { formatString: "%'d万円" }
                    }
                }
            }

    );

    $("table.jqplot-table-legend tr td").css('padding-top','9px');

    $(window).on('resize',function(event) {
        jqPlotChart2.replot();
        $("table.jqplot-table-legend tr td").css('padding-top','9px');
    });
}
function _calc2(n, r, m) {
    if (r == 0) {
        return Math.round(m / n);
    } else {
        r = r / 1200;
        ret = (Math.pow(1 + r, n) - 1) / r;
        return Math.round(m / ret);
    }
}

//何年間積み立てる？
function calc3() {
    var t = parseFloat($('#calc3_t').val()) * 10000;
    var r = parseFloat($('#calc3_r').val());
    var m = parseFloat($('#calc3_m').val()) * 10000;

    var ret = _calc3(t, r, m);

   // var tickInterval = getTickInterval(Math.ceil(ret/12));
    $('#calc3_result').html(
            Math.floor(ret / 12).toString() + "年"
                    + Math.ceil(ret % 12).toString() + "ヶ月");
    var data = getChartData(t, ret, r);
    var values = data.values;
    var ticks = data.ticks;
    var payTotal = t/10000*ret;

    var principal = payTotal;
    var profit = (values[values.length-1][1]-payTotal)/10000;
    var dataPrincipals = [];
    var dataProfits = []


    for(var i=0; i<values.length; i++){
        var n = values[i][0];
        var p = t*n/10000;

            dataPrincipals[i] = [n, p];
            dataProfits[i] = [n, values[i][1]- p];

    }
    var k = deleteBeforeLastOne(ticks, values);
    if(k > 0){
        dataPrincipals[k] = [n, ''];
        dataProfits[k] = [n, ''];
        values[k][1] = '';
    }
    principal = dataPrincipals[dataPrincipals.length-1][1];
    profit = dataProfits[dataProfits.length-1][1];
    if(jqPlotChart3) jqPlotChart3.destroy();

    barRenderOption['barMargin'] = values.length > 10 ? 10 : 20;
    jqPlotChart3 = $.jqplot(
            "result3_chart",
            [dataPrincipals, dataProfits, values],
             {
                stackSeries: true,
                legend: defaultLegend,
                series:[{
                    label:"元本（" + principal.toFixed(1) + "万円）",
                    // color:'#DEEFF5', mao
                    color:'#029683',
                    renderer: jQuery.jqplot.BarRenderer,
                    xaxis: 'xaxis',
                    yaxis: 'yaxis',
                    rendererOptions:barRenderOption,
                    pointLabels: defaultPointLabels
                },
                {
                    label:"運用収益（" + profit.toFixed(1) + "万円）",
                    color:'#FDF396',
                    renderer: jQuery.jqplot.BarRenderer,
                    xaxis: 'xaxis',
                    yaxis: 'yaxis',
                    rendererOptions:barRenderOption,
                    pointLabels: defaultPointLabels
                },
                {
                    label:"金額の推移",
                    color:TOTAL_COLOR,
                    showMarker:false,
                    disableStack : true,
                    pointLabels: {
                        show: true,
                        location: 'n',
                        formatString: "<span style='color:" + TOTAL_COLOR + ";'>%'.1f万円</span>",
                        escapeHTML:false,
                        ypadding:10
                    },
                    showLine:false,
                    lineWidth:1,
                    shadow:false
                }
                ],
                title:'積立金額と運用成果',
                seriesDefaults:{
                    rendererOptions: {
                        animation: {
                            speed: 1000
                        }
                    }
                },
                animate: true,
                axes:{
                    xaxis:{
                        renderer: jQuery.jqplot.DateAxisRenderer,
                        ticks:ticks
                    },
                    yaxis:{
                        min:0,
                        tickOptions: { formatString: "%'d万円" }
                    }
                }
             }
    );
    $("table.jqplot-table-legend tr td").css('padding-top','9px');

    $(window).on('resize',function(event) {
        jqPlotChart3.replot();
        $("table.jqplot-table-legend tr td").css('padding-top','9px');
    });
}

function _calc3(pmt, rate, fv) {
    fv = parseFloat(fv); // 目標金額
    pmt = parseFloat(pmt); // 定期支払額
    per = 12;

    if (pmt == 0) {
        alert("Why do you want to test me with zeros?");
        return (0);
    }
    rate = eval((rate) / (per * 100));

    if (rate == 0) {
        nper_value = (fv) / pmt;
    } else {
        nper_value = Math.log((fv * rate + pmt) / (pmt)) / Math.log(1 + rate);
    }
    return (nper_value);
}

function deleteBeforeLastOne(ticks, values){
    if(ticks[ticks.length-2][0] != values[values.length-1][0]) {
        return values.length - 2;
     }
    return -1;
}
//calc3の場合の検証要
function getChartData(t, n, r) {
    var values = [];
    var ticks = [];
    n = Math.ceil(n);
    var yy = Math.ceil(n/12);

    var match = null;
    var interval = 1;
    if(!dataIntervals[yy]){
        interval = n/10;
        unit = 'month';
    }else{
        var interval = Number(dataIntervals[yy][0]);
        var unit = dataIntervals[yy][1];
        if(unit == 'year'){
            interval *= 12;
        }
    }


    for (var i = 0; i <= n; i+=interval) {
        var d = new Date();
        d.setMonth(d.getMonth() + (i - 1));
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        var day = d.getDate();
        var label = "";
        var yearString = "";
        //console.log([ i, y + "-" + m, _calc1(t, i, r) ]);
       // console.log(d);
        //ret.push( [ y + "/" + m + "/" + day,_calc1(t, i, r)/10000]);
        values.push([i,_calc1(t, i, r)/10000]);
        if( i == 0){
            ticks.push([i, '開始']);
        }else{
            if(unit == 'year'){
                ticks.push([i,Math.round(i/12).toString() + "年目"]);
            }else{
                if(i < 12){
                    yearString = Math.round(i).toString() + "ヶ月";
                }else{
                    if(i%12 != 0){
                        yearString = (Math.floor(i/12)).toString()+"年" + Math.round(i%12)+"ヶ月";
                    }else{
                       yearString = Math.round(i/12).toString() + "年目";
                    }
                }
                ticks.push([i,yearString]);
            }
        }
    }
    if(n%interval != 0){
        values.push([n,_calc1(t, n, r)/10000]);
        if(i%12 == 0){
            ticks.push([i, Math.round((i)/12).toString() + "年目"]);
        }else{
            ticks.push([i, (Math.floor(i/12)).toString()+"年" + Math.round(i%12)+"ヶ月"]);
        }

        ticks.push([i+interval,'']);
    }else{
        ticks.push([i,'']);
    }

    ticks.unshift([-interval,''])


    return {values:values, ticks:ticks};
}

var numberFormat = function(num) {
    return num.toString().replace(/^\d+[^\.]/, function(t) {
        return t.replace(/([\d]+?)(?=(?:\d{3})+$)/g, function(t) {
            return t + ',';
        });
    });
}

//_calc1 rate:利子率 per:年積立回数 nper:総積立回数 pmt:定期積立額 pv:初期値
//総額は？
function fv(rate, per, nper, pmt, pv){
    nper = parseFloat(nper);
    pmt = parseFloat(pmt);
    pv = parseFloat(pv);
    rate = eval((rate) / (per * 100));

    if ((pmt == 0) || (nper == 0)) {
        alert("Why do you want to test me with zeros?");
        return (0);
    }

    if (rate == 0) {
        fv_value = -(pv + (pmt * nper));
    }else{
        x = Math.pow(1 + rate, nper);
        // y = Math.pow(1 + rate, nper);
        fv_value = -(-pmt + x * pmt + rate * x * pv) / rate;
    }
    return (fv_value);
}
//_calc2 rate:利子率 per:年積立回数 nper:総積立回数 pv:初期値 fv:目標額
//定期支払額は？
function pmt(rate, per, nper, pv, fv){
    fv = parseFloat(fv);
    nper = parseFloat(nper);
    pv = parseFloat(pv);
    per = parseFloat(per);
    if ((per == 0) || (nper == 0)) {
        alert("Why do you want to test me with zeros?");
        return (0);
    }
    rate = eval((rate) / (per * 100));
    if (rate == 0) {
        pmt_value = -(fv + pv) / nper;
    }else{
        x = Math.pow(1 + rate, nper);
        pmt_value = -((rate * (fv + x * pv)) / (-1 + x));
    }
    return (pmt_value);
}
//_calc3 rate:利子率 per:年積立回数 pmt:定期積立額 pv:初期値 fv:目標額
//総支払い回数は？
function nper(rate, per, pmt, pv, fv) {
    fv = parseFloat(fv);
    pmt = parseFloat(pmt);
    pv = parseFloat(pv);
    per = parseFloat(per);
    if ((per == 0) || (pmt == 0)) {
        alert("Why do you want to test me with zeros?");
        return (0);
    }

    rate = eval((rate) / (per * 100));
    if (rate == 0) {
        nper_value = -(fv + pv) / pmt;
    } else {
        nper_value = Math.log((-fv * rate + pmt) / (pmt + rate * pv))
                / Math.log(1 + rate);
    }
    return (nper_value);
}


$(function(){
    $('.tab li').click(function() {

        var idx = $(this).index();
        if(idx == 0){
            if(jqPlotChart1 == null || jqPlotBar1 == null){
                setTimeout(function(){
                    calc1();
                },100);
            }else{
                setTimeout(function(){
                    jqPlotChart1.replot();
                    $("table.jqplot-table-legend tr td").css('padding-top','9px');
                })
            }

        }else if( idx == 1){
            if(jqPlotChart2 == null || jqPlotBar2 == null){
                setTimeout(function(){
                    calc2();
                },0);
            }else{
                setTimeout(function(){
                    jqPlotChart2.replot();
                    $("table.jqplot-table-legend tr td").css('padding-top','9px');
                },0)
            }
        }else if( idx == 2){
            if(jqPlotChart3 == null || jqPlotBar3 == null){
                setTimeout(function(){
                    calc3();
                },100);
            }else{
                setTimeout(function(){
                    jqPlotChart3.replot();
                    $("table.jqplot-table-legend tr td").css('padding-top','9px');
                }, 0)
            }
        }
    });

    calc1();
})