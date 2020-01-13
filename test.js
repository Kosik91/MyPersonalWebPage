var $containeri = $('#containeri').isotope({
    // options
});
// filter items on button click
$('#filters').on('click', '.button', function () {
    var filterValue = $(this).attr('data-filter');
    $containeri.isotope({ filter: filterValue });
});