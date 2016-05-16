app.factory('dataStorage', function() {

    var img = '/img/placeholder.jpg';
//    var img = new Image();
//    var file = new File('/img/placeholder.jpg');
//    var reader = new FileReader();
//    reader.onload = function(e) {
//        img.src = reader.result;
//    };
//    reader.readAsDataURL(file);
//    
    var creation_date = new Date(2016, 05, 12, 14, 55, 0, 0);
    var projects = [
        { 'name': 'Test Project', 'id': '0', 'date_created': creation_date, 'approved_price': 157, 'price_change': 10,
        'overview': {
            'customer': { 'name': 'Mr Test Customer'},
            'name': 'Test Project', 'id': '0', 'date_created': creation_date, 'original_price': 147,
            'approved_changes_price': 10, 'unapproved_changes_price': 0
        },
        'changes': [
            {'name': 'Test Change', 'date': creation_date, 'description': 'Test description', 'original_cost': 50,
            'revised_cost': 60, 'status': 'COMPLETED', 'id': 0}
        ],
        'timeline': [
            { 'type': 'PHOTO', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location', 'data': img},
            { 'type': 'PHOTO', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location', 'data': img},
            { 'type': 'PHOTO', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location', 'data': img},
            { 'type': 'PHOTO', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location', 'data': img},
            { 'type': 'PHOTO', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location', 'data': img}
            ]
        }
    ];
    
    var histories = [
        [
         { 'status': 'CREATED', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location'},
         { 'status': 'REJECTED', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location'},
         { 'status': 'PENDING_APPROVAL', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location'},
         { 'status': 'APPROVED', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location'},
         { 'status': 'COMPLETED', 'date': creation_date, 'author': 'Test Author', 'location': 'Test Location'}
        ]
    ];
    
    return {
        getProjects: function () {
            return projects;
        },
        
        getProjectOverview: function (id) {
            return projects[id].overview;
        },
        
        getChanges: function(id) {
            return projects[id].changes;
        },
        
        getTimeline: function(id) {
            return projects[id].timeline;
        },
        
        getHistory: function(id){
            return histories[id];
        }
    };
})