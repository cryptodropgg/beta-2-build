var sound = new Audio('/sound/slots/spinning.mp3');
var ding = new Audio('/sound/slots/ding.wav');


// Loop of playing sound
sound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

var startSeqs = {};
var startNum = 0;

const allEqual = arr => arr.every( v => v === arr[0] )

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var endResultArr = [1, 2, 3, 4, 5, 6];
function stopSpin(result){

    console.log("result: ", result);
    
    if(result === "win1"){
        endResultArr = [1, 1, 1, 1, 1];
        $('#example5 ul').stopSpin();
    }else if(result === "win2"){
        endResultArr = [2, 2, 2, 2, 2];
        $('#example5 ul').stopSpin();
    }else if(result === "win3"){
        endResultArr = [3, 3, 3, 3, 3];
        $('#example5 ul').stopSpin();
    }else if(result === "win4"){
        endResultArr = [4, 4, 4, 4, 4];
        $('#example5 ul').stopSpin();
    }else if(result === "win5"){
        endResultArr = [5, 5, 5, 5, 5];
        $('#example5 ul').stopSpin();
    }else if(result === "lose"){
        endResultArr = [randomIntFromInterval(1, 5), randomIntFromInterval(1, 5), randomIntFromInterval(1, 5), randomIntFromInterval(1, 5), randomIntFromInterval(1, 5)];
        // endResultArr = [2, 2, 2, 2, 3];

        // PREVENT ALL SAME RANDOM
        if(allEqual(endResultArr)){
            var sameFlag = endResultArr[0];
            var sameFlag2 = 6;

            if(sameFlag === 1){
                sameFlag += 2
            }else if(sameFlag ===5){
                sameFlag-=3;
                sameFlag2 = 5
            }else{
                sameFlag+=1
            }
            endResultArr = [randomIntFromInterval(1, 5), randomIntFromInterval(sameFlag, sameFlag2), randomIntFromInterval(1, 5), randomIntFromInterval(1, 5), randomIntFromInterval(1, 5)];
        }

        
        $('#example5 ul').stopSpin();
    }
}

function startSpinEnd(result, withSound, _callback){
    sound.play();
    result = "lose";

    $('#example5 ul').playSpin({
        easing: 'easeOutBack',
        stopSeq: 'leftToRight',
        time: 1500,
        // manualStop: true,
        onFinish: function() {
            sound.pause(); // To stop the looping sound is pause it
            _callback();   
        }
    });
}

function startSpin(result, withSound, _callback){
    // sound.play();

    let resultArr = [];

    var slotSpinState = 1;
    var winningState = 1;

    var winningSlot1 = new Audio('/sound/apeslots/winningSlot1.mp3');
    var winningSlot2 = new Audio('/sound/apeslots/winningSlot2.mp3');
    var winningSlot3 = new Audio('/sound/apeslots/winningSlot3.mp3');
    var winningSlot4 = new Audio('/sound/apeslots/winningSlot4.mp3');
    var winningSlot5 = new Audio('/sound/apeslots/winningSlot5.mp3');
    var losingSlotApe = new Audio('/sound/apeslots/losingSlot.mp3');

    $('#example5 ul').playSpin({
        easing: 'easeOutBack',
        stopSeq: 'leftToRight',
        time: 2000,
        manualStop: true,
        endNum: resultArr,
        onEnd: function() {
            const flag = slotSpinState - 1;

            console.log(`slotSpinState: ${slotSpinState}, endResultArr[${slotSpinState-1}]: ${endResultArr[slotSpinState-1]}`)
            console.log(endResultArr);

            if(slotSpinState === 1){
                console.log('1 spin state');
                if(withSound){
                    winningSlot1.play();
                }
                slotSpinState++;
            }else if(slotSpinState === 2){
                console.log('2 spin state');
                if(endResultArr[1] === endResultArr[0]){
                    if(withSound){
                        winningSlot2.play();
                    }
                }else{
                    if(withSound){
                        losingSlotApe.cloneNode(true).play();
                    }
                    winningState = 0;
                }

                slotSpinState++;
            }else if(slotSpinState === 3){
                console.log('3 spin state');
                if(endResultArr[2] === endResultArr[1] && winningState === 1){
                    if(withSound){
                        winningSlot3.play();
                    }
                }else{
                    if(withSound){
                        losingSlotApe.cloneNode(true).play();
                    }
                    winningState = 0;
                }

                slotSpinState++;
            }else if(slotSpinState === 4){
                console.log('4 spin state');
                if(endResultArr[3] === endResultArr[2] && winningState === 1){
                    if(withSound){
                        winningSlot4.play();
                    }
                }else{
                    if(withSound){
                        losingSlotApe.cloneNode(true).play();
                    }
                    winningState = 0;
                }

                slotSpinState++;
            }else if(slotSpinState === 5){
                console.log('5 spin state');
                if(endResultArr[4] === endResultArr[3] && winningState === 1){
                    if(withSound){
                        winningSlot5.play();
                    }
                }else{
                    if(withSound){
                        losingSlotApe.cloneNode(true).play();
                    }
                    winningState = 0;
                }
            }
        },
        onFinish: function() {
            sound.pause(); // To stop the looping sound is pause it
            _callback();   
        }
    });
}

// jQuery FN
$.fn.playSpin = function (options) {
    if (this.length) {
        if ($(this).is(':animated')) return; // Return false if this element is animating
        startSeqs['mainSeq' + (++startNum)] = {};
        $(this).attr('data-playslot', startNum);

        var total = this.length;
        var thisSeq = 0;

        // Initialize options
        if (typeof options == 'undefined') {
            options = new Object();
        }

        // Pre-define end nums
        var endNums = [];
        if (typeof options.endNum != 'undefined') {
            if ($.isArray(options.endNum)) {
                endNums = options.endNum;
            } else {
                endNums = [options.endNum];
            }
        }

        for (var i = 0; i < this.length; i++) {
            if (typeof endNums[i] == 'undefined') {
                endNums.push(0);
            }
        }

        startSeqs['mainSeq' + startNum]['totalSpinning'] = total;
        return this.each(function () {
            options.endNum = endNums[thisSeq];
            startSeqs['mainSeq' + startNum]['subSeq' + (++thisSeq)] = {};
            startSeqs['mainSeq' + startNum]['subSeq' + thisSeq]['spinning'] = true;
            var track = {
                total: total,
                mainSeq: startNum,
                subSeq: thisSeq
            };
            (new slotMachine(this, options, track));
        });
    }
};

$.fn.stopSpin = function () {
    if (this.length) {
        if (!$(this).is(':animated')) return; // Return false if this element is not animating
        if ($(this)[0].hasAttribute('data-playslot')) {
            var time = 0;

            $.each(startSeqs['mainSeq' + $(this).attr('data-playslot')], function(index, obj) {
                setTimeout( function(){ 
                    obj['spinning'] = false;
                }, time)
                time += 2500;
            });
        }
    }
};

var slotEndFlag = 0;

var slotMachine = function (el, options, track) {
    slotEndFlag=0;

    var slot = this;
    slot.$el = $(el);

    slot.defaultOptions = {
        easing: 'swing',        // String: easing type for final spin
        time: 1000,             // Number: total time of spin animation
        loops: 6,               // Number: times it will spin during the animation
        manualStop: false,      // Boolean: spin until user manually click to stop
        stopSeq: 'random',      // String: sequence of slot machine end animation, random, leftToRight, rightToLeft
        endNum: 0,              // Number: animation end at which number/ sequence of list
        onEnd : $.noop,         // Function: run on each element spin end, it is passed endNum
        onFinish: $.noop        // Function: run on all element spin end, it is passed endNum
    };

    slot.spinSpeed = 0;
    slot.loopCount = 0;

    slot.init = function () {
        slot.options = $.extend({}, slot.defaultOptions, options);
        slot.setup();
        slot.startSpin();
    };

    slot.setup = function () {
        var $li = slot.$el.find('li').first();
        slot.liHeight = $li.innerHeight();
        slot.liCount = slot.$el.children().length;
        slot.listHeight = slot.liHeight * slot.liCount;
        slot.spinSpeed = slot.options.time / slot.options.loops;

        $li.clone().appendTo(slot.$el); // Clone to last row for smooth animation

        // Configure stopSeq
        if (slot.options.stopSeq == 'leftToRight') {
            if (track.subSeq != 1) {
                slot.options.manualStop = true;
            }
        } else if (slot.options.stopSeq == 'rightToLeft') {
            if (track.total != track.subSeq) {
                slot.options.manualStop = true;
            }
        }
    };

    slot.startSpin = function () {
        slot.$el
            .css('top', -slot.listHeight)
            .animate({'top': '0px'}, slot.spinSpeed, 'linear', function () {
                slot.lowerSpeed();
            });
    };

    slot.lowerSpeed = function () {
        slot.loopCount++;

        if (slot.loopCount < slot.options.loops ||
            (slot.options.manualStop && startSeqs['mainSeq' + track.mainSeq]['subSeq' + track.subSeq]['spinning'])) {
            slot.startSpin();
        } else {
            slot.endSpin();
        }
    };

    slot.endSpin = function () {
        var slotEndingFlag = 3;

        if(slotEndFlag == 0 ){
            slotEndingFlag = endResultArr[0];
        }else if(slotEndFlag == 1){
            slotEndingFlag = endResultArr[1];
        }else if(slotEndFlag == 2){
            slotEndingFlag = endResultArr[2];
        }else if(slotEndFlag == 3){
            slotEndingFlag = endResultArr[3];
        }else if(slotEndFlag == 4){
            slotEndingFlag = endResultArr[4];
        }

        slotEndFlag+=1;

        if (slotEndingFlag == 0) {
            slotEndingFlag = slot.randomRange(1, slot.liCount);
        }

        // // Error handling if endNum is out of range
        // if (slotEndingFlag < 0 || slotEndingFlag > slot.liCount) {
        //     slotEndingFlag = 1;
        // }

        var finalPos = -((slot.liHeight * slotEndingFlag) - slot.liHeight);
        
        var finalSpeed = ((slot.spinSpeed * 1.5) * (slot.liCount)) / slotEndingFlag;

        slot.$el
            .css('top', -slot.listHeight)
            .animate({'top': finalPos}, finalSpeed, slot.options.easing, function () {
                slot.$el.find('li').last().remove(); // Remove the cloned row

                slot.endAnimation(slotEndingFlag);
                if ($.isFunction(slot.options.onEnd)) {
                    slot.options.onEnd(slotEndingFlag);
                }

                // onFinish is every element is finished animation
                if (startSeqs['mainSeq' + track.mainSeq]['totalSpinning'] == 0) {
                    var totalNum = '';
                    $.each(startSeqs['mainSeq' + track.mainSeq], function(index, subSeqs) {
                        if (typeof subSeqs == 'object') {
                            totalNum += subSeqs['endNum'].toString();
                        }
                    });
                    if ($.isFunction(slot.options.onFinish)) {
                        slot.options.onFinish(totalNum);
                    }
                }
            });
    }

    slot.endAnimation = function(endNum) {
        if (slot.options.stopSeq == 'leftToRight' && track.total != track.subSeq) {
            startSeqs['mainSeq' + track.mainSeq]['subSeq' + (track.subSeq + 1)]['spinning'] = false;
        } else if (slot.options.stopSeq == 'rightToLeft' && track.subSeq != 1) {
            startSeqs['mainSeq' + track.mainSeq]['subSeq' + (track.subSeq - 1)]['spinning'] = false;
        }
        startSeqs['mainSeq' + track.mainSeq]['totalSpinning']--;
        startSeqs['mainSeq' + track.mainSeq]['subSeq' + track.subSeq]['endNum'] = endNum;
    }

    slot.randomRange = function (low, high) {
        return Math.floor(Math.random() * (1 + high - low)) + low;
    };

    this.init();
};