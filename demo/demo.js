var timespace, initiated = false;

function initTimeline() {

    var config = {
        timeType: 'hour',
        use12HourTime: true,
        useTimeSuffix: true,
        navigateAmount: 500,
        selectedEventArticle: false,
        shiftOnEventSelect: false,
        selectedEvent: 0,
        timeSuffixFunction: function (s) { // Set the time suffix function for displaying as '12 A.M.'
            return ' ' + s[0].toUpperCase() + '.' + s[1].toUpperCase();
        },
        data: {
            headings: [],
            events: {
                trips: [{
                    start: "7.86.66666666666667",
                    end: "8.5",
                    markerContent: "<span class=\"icon\"><span class=\"fas fa-play\"></span></span><div class=\"lbl\">07:52 AM</div>",
                    class: "trip-start"
                },
                {
                    start: "9.25",
                    markerContent: "<span class=\"icon\"><span class=\"fas fa-stop\"></span></span><div class=\"lbl\">09:15 AM</div>",
                    class: "trip-stop"
                }],
                diary_time_trackings: []
            }
        }
    };

    timespace = $('#timeline').timespace(config).Timespace;

    timespace.onRangeOverflow = function (direction) {
    };

    initiated = true;
}