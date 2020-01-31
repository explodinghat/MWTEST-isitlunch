var now = new Date();

var a = new Date
a.setHours(10);
a.setMinutes(30);

var s = new Date;
s.setHours(13);
s.setMinutes(00);

var e = new Date
e.setHours(13);
e.setMinutes(30);

var m = new Date
m.setHours(14);
m.setMinutes(0);

var current = now.getTime();
var almostLunch = a.getTime();
var startLunch = s.getTime();
var endLunch = e.getTime();
var missedLunch = m.getTime();


if ((current > almostLunch) && (current < startLunch)) {
    document.write('<h1 class="almost">Almost</h1>');
}
else if ((current > endLunch) && (current < missedLunch)) {
    document.write('<h1 class="missed">Just missed it</h1>');
}
else if ((current < startLunch) || (current > endLunch)) {
    document.write('<h1>No</h1>');
}
else {
    document.write('<h1 class="yes">Yes</h1>');
}
