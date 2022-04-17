define(['https://pcplab.sfo2.digitaloceanspaces.com/common/qiat.js'], function (qiatExtension) {
    return qiatExtension({
        // uncomment the following line in order to skip blocks using esc + enter
        // DEBUG: true, 
        category1: {
            title: 'Masculine',
            hint: ' - 1',
            name: 'Masculine', //Will appear in the data.
            stimuli: [ //Stimuli content as PIP's media objects
                'Willing to take a stand',
                'Defends own beliefs',
                'Independent',
                'Has leadership abilities',
                'Strong personality',
                'Dominant',
                'Aggressive',
                'Assertive',
                'Willing to take risks'
            ]
        },
        category2: {
            title: 'Feminine',
            hint: ' - 2',
            name: 'Feminine', //Will appear in the data.
            stimuli: [ //Stimuli content as PIP's media objects
                'Affectionate',
                'Warm; compassionate',
                'Gentle',
                'Tender',
                'Sympathetic',
                'Sensitive to needs of others',
                'Soothe hurt feelings',
                'Understanding',
                'Loves children'
            ]
        },
        attribute1: {
            title: 'Male Entrepreneurs',
            name: 'TRUE',
            stimuli: [
                'James', 
                'Robert', 
                'John', 
                'Michael', 
                'William', 
                'David', 
                'Richard', 
                'Joseph', 
                'Thomas', 
                'Charles'
            ]
        },
        attribute2: {
            title: 'Female Entrepreneurs',
            name: 'FALSE',
            stimuli: [
                'Mary', 
                'Patricia', 
                'Jennifer', 
                'Linda', 
                'Elizabeth', 
                'Barbara', 
                'Susan', 
                'Jessica', 
                'Sarah', 
                'Karen'
            ]
        },

        /**
         * The number of trials for each block
         * The first number represents the first block, the second number represents the second block and so on.
         */
        blockCount:[20,20,40,40,40,40,40],

        /*
         * These are instructions that will be displayed at the beginning of the task.
         * Category/attribute names will not be displayed on top
         * You can add any number of instruction pages into the array
         */
        preTaskInstructions: [
            '<div style="font-size: 20px; color: white; text-align: left;">',
            '<div>Please make sure that you have read the instructions thoroughly before continuing to the next page.</div><div>In the next task, you will need to classify words/phrases into categories.<br>',
            'Please do this as quickly as you can, while making as few mistakes as possible.<br>',
            'These are the four categories into which you will classify the sentences:</div>',
            '<br>'
            '<font color="#FFFF00">Male Entrepreneur Names<br>Female Entrepreneur Names</font><br>',
            '<font color="#00FFFF">Masculine Words/Phrases <br>Feminine Words/Phrases</font>',
            '<div><br>To continue reading the instructions, press the space bar.</div>',
            '</div>'
        ].join('\n'),

        /*
         * This is the prompt that is displayed before the start of each trial
         */
        startBlockInst: '<div style="font-size:22px;">Press the spacebar to begin</div>',

        /*
         * Block 1
         * *******************************************************************************************************************
         * Instruction page displaying all attributes
         */
        instAttributeInventory: [
            '<div style="text-align:left">',
            '<p>These are the names you will need to classify first:</p>',
            '<table style="height: 238px; width: 779px;" cellspacing="10">',
            '<tbody>',
            '<tr style="height: 31px;">',
            '<td style="width: 362px; height: 31px;"><span style="color: #00ffff;">Male Entrepreneurs: </span></td>',
            '<td style="width: 35px; height: 31px;"><span style="color: #00ffff;"> </span></td>',
            '<td style="width: 366px; height: 31px;"><span style="color: #00ffff;">Female Entrepreneurs: </span></td>',
            '</tr>',
            '<tr style="height: 20px;">',
            '<% for (var i = 0; i<current.attribute1.stimuli.length; i++) { %>',
            '    <tr style="height: 40px;">',
            '    <td style="width: 362px; height: 40px;"><span style="color: #00ffff;"><%= current.attribute1.stimuli[i] %></span></td>',
            '    <td style="width: 35px; height: 40px;"><span style="color: #00ffff;"> </span></td>',
            '    <td style="width: 366px; height: 40px;"><span style="color: #00ffff;"><%= current.attribute2.stimuli[i] %></span></td>',
            '    </tr>',
            '<% } %>',
            '</tbody>',
            '</table>',
            '<tr style="height: 40px;">',
            '<p> Press the spacebar to continue reading the instructions...</p></div>'
        ].join('\n'),

        /*
         * Instructions for attribute practice
         */
        instAttributePractice: [
            '<div style="font-size: 20px; color: white; text-align: left;">',
            '<p id="instructions">',
            'Please <b>PUT YOUR INDEX FINGERS</b> on the <font color="#FF0000"><b>D</b></font> and <font color="#FF0000"><b>L</b></font> keys of your keyboard.<br>',
            'Names representing the categories at the top of the screen will appear one by one in the middle of the screen.<br>',
            'When the name belongs to a category on the left, press the D key.<br>',
            'When the name belongs to a category on the right, press the L key.<br><br></p>',
            '<p id="instructions">Each name belongs to <b>ONLY ONE</b> category.<br>',
            'If you make an error, an <font color="#FF0000">X</font> will appear.&nbsp;',
            'You will need to quickly press the other, correct key.<br>',
            'Please press the space bar to continue...',
            '</p>',
            '</div>'
        ].join('\n'),

        /*
         * Block2
         * *******************************************************************************************************************
         * Instruction page displaying all categories
         */
        instCategoryInventory: [
            '<div style="text-align:left">',
            '<p>These are the sentences you will need to classify now:</p>',
            '<table style="height: 238px; width: 779px;" cellspacing="10">',
            '<tbody style="color: #ffff00;">',
            '<tr style="height: 49px;">',
            '<td style="width: 362px; height: 49px;"><span >Male Entrepreneur Names: </span></td>',
            '<td style="width: 35px; height: 31px;"></td>',
            '<td style="width: 366px; height: 49px;"><span>Female Entrepreneur Names: </span></td>',
            '</tr>',
            '<% for (var i = 0; i<current.category1.stimuli.length; i++) { %>',
            '    <tr style="height: 40px;">',
            '    <td style="width: 362px; height: 40px;"><span ><%= current.category1.stimuli[i] %></span></td>',
            '    <td style="width: 35px; height: 40px;"></td>',
            '    <td style="width: 366px; height: 40px;"><span ><%= current.category2.stimuli[i] %></span></td>',
            '    </tr>',
            '<% } %>',
            '</tbody>',
            '</table>',
            '<p> Press the spacebar to continue reading the instructions...</p></div>'
        ].join('\n'),

        /*
         * Instruction for category practice with hints
         */
        instCategoryPracticeHinted: [
            '<div style="font-size: 22px; color: white; text-align: left;">',
            '<p id="instructions">As you can see, the categories have changed.<br>',
            'The sentences for sorting have changed as well. The rules, however, are the same.</p>',
            '<p id="instructions">Press either D or L to sort sentences to the categories on the screen.<br><br>',
            '<font color="#FFFF00"><b>In this part of the task, each sentence will include a categorization hint to help you learn the categories. Later, this hint will not be provided.</b></font><br>',
            'If you make an error, correct it by hitting the other key.<br>',
            '<font color="#FFFF00">This part is for practice, and will help you learn the categories.&nbsp;<br>',
            'Therefore, speed here is not important.</font><br>',
            'Please press the space bar to continue...</p>',
            '</div>'
        ].join('\n'),

        /*
         * Block3
         * *******************************************************************************************************************
         * Instruction for category practice without hints
         */
        instCategoryPractice: [
            '<div style="font-size: 22px; color: white; text-align: left;">',
            '<p id="instructions">',
            'Sort the sentences into the same two categories again.<br>',
            '<font color="#FFFF00">This time, hints will not be presented with the sentences.</font><br><br>',
            'Please press the space bar to continue...',
            '</div>'
        ].join('\n'),

        /*
         * Block4
         * *******************************************************************************************************************
         * Instruction for category practice without hints
         */
        instDouble: [
            '<div style="font-size: 22px; text-align: left;">',
            '<p id="instructions" style="color: white;">',
            'As you can see, all four categories now appear together.<br>',
            'The blue or yellow color of the sentences will help you identify the appropriate category for each sentence.<br>',
            'Use the D and L keys to categorize sentences into the four groups, left and right.</p>',
            '<p id="instructions" style="color: white;"><br><font color="#FFFF00"><b>Work as fast as you can, while making as few errors as possible.</b></font></p>',
            '<p id="instructions" style=""><font color="#ffffff">Please press the space bar to continue...</font></p>',
            '</div>'
        ].join('\n'),

        instSwitchPractice: [
            '<div style="font-size: 22px; color: white; text-align: left;">',
            '<p id="instructions">',
            'As you can see, there are now again only two categories, but they have switched positions.<br>',
            'The category that was previously on the left is now on the right, and the category that was on the right is now on the left.<br>',
            'Now you will practice this new configuration of the categories.<br>',
            'Use the D and L keys to categorize the sentences, left and right.<br>',
            'Correct errors by hitting the other key.<br>',
            'Please press the space bar to continue...',
            '</div>'
        ].join('\n'),

        instSwitch: [
            '<div style="font-size: 22px; text-align: left;">',
            '<p id="instructions">',
            'As you can see, all four categories now appear together, in the new configuration.<br><br>',
            '<font color="#FFFF00"><b>Remember to go as fast as you can while making as few errors as possible.</b></font>',
            '</p>',
            '<p id="instructions">',
            '<br>',
            '<font color="#ffffff">Please press the space bar to continue...</font>',
            '</p>',
            '</div>'
          ].join('\n'),

    });

    //NOTE: when you test the task, remember that pressing ESC and then ENTER skips blocks.
    
    
    API.addSettings('logger', {
    // gather logs in array
    onRow: function(logName, log, settings, ctx){
        if (!ctx.logs) ctx.logs = [];
        ctx.logs.push(log);
    },
    // onEnd trigger save (by returning a value)
    onEnd: function(name, settings, ctx){
        return ctx.logs;
    },
    // Transform logs into a string
    // we save as CSV because qualtrics limits to 20K characters and this is more efficient.
    serialize: function (name, logs) {
        var headers = ['group', 'latency', 'block', 'stimulus', 'correct'];
        var content = logs.map(function (log) { return [log.data.alias, log.latency, log.data.block, log.data.stimIndex, log.data.score]; });
        content.unshift(headers);
        return toCsv(content);

        function toCsv(matrice) { return matrice.map(buildRow).join('\n'); }
        function buildRow(arr) { return arr.map(normalize).join(','); }
        // wrap in double quotes and escape inner double quotes
        function normalize(val) {
            var quotableRgx = /(\n|,|")/;
            if (quotableRgx.test(val)) return '"' + val.replace(/"/g, '""') + '"';
            return val;
        }
    },
    // Set logs into an input (i.e. put them wherever you want)
    send: function(name, serialized){
        window.minnoJS.logger(serialized);
    }
    });
});
