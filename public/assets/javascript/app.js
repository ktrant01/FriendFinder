
$.ajax({
	url: '/questions',
	method: 'GET'
}).then(function(data){
	var p, ob, necc, form, button, a, table, tr, td;
	for (var i=0; i<data.length; i++){
        ob = data[i];
        form = $('<form>');
        tr = $('<tr>')
        table = $('<table>')
        

        input = $('<input>')
        p = $('<p>');
        h1 = $('<h1>')
        p.text(ob.question);
        submit = $('<button>Submit</button>')

        $('form').append(p);
        option1 = $('<div>')
        option2 = $('<div>')
        option3 = $('<div>')
        option4 = $('<div>')
        option5 = $('<div>')

        
        $('form').append(option1);
        option1.text('Strongly Disagree')

                    
        			button1 = $('<input>');
                    button1.attr('value', '1');
                    button1.attr('name', 'answer' + ob.id)
                    button1.attr('type', 'radio')
                    option1.append(button1);

                    $('form').append(option2);
                    option2.text('Disagree')

        			button2 = $('<input>');
                    button2.attr('selection', '2');
                    button2.attr('value', '2');
                    button2.attr('name', 'answer' + ob.id)
                    button2.attr('type', 'radio')
                    option2.append(button2);
                    
                    $('form').append(option3);
                    option3.text('Neutral')

                    button1 = $('<input>');
                    button1.attr('selection', '3');
                    button1.attr('value', '3');
                    button1.attr('name', 'answer' + ob.id)
                    button1.attr('type', 'radio')
                    option3.append(button1);

                    $('form').append(option4);
                    option4.text('Agree')

                    button1 = $('<input>');
                    button1.attr('selection', '4');
                    button1.attr('value', '4');
                    button1.attr('name', 'answer' + ob.id)
                    button1.attr('type', 'radio')
                    option4.append(button1);

                    $('form').append(option5);
                    option5.text('Strongly agree')

                    button1 = $('<input>');
                    button1.attr('selection', '5');
                    button1.attr('value', '5');
                    button1.attr('name', 'answer' + ob.id)
                    button1.attr('type', 'radio')
                    option5.append(button1);


                    // form.append(button);
                    // p.append(form);


    }
    $('form').append(submit)

});


$.ajax({
	url: '/answers',
	method: 'GET'
}).then(function(data){
	var p, ob, necc, form, button, a, table, tr, td;
	for (var i=0; i<data.length; i++){
        ob = data[i];

        console.log(ob)
        // results = []
        // results.push(ob.answer1)
        // results.push(ob.answer2)
        // results.push(ob.answer3)
        // results.push(ob.answer4)
        // results.push(ob.answer5)
        // results.push(ob.answer6)
        // results.push(ob.answer7)
        // results.push(ob.answer8)
        // results.push(ob.answer9)
        // results.push(ob.answer10)
        // console.log(results)

    }

});


