({
    name: Blockly.Msg.music, // Category Name
    description: "Make buzzer beep sound",
    author: "microBlock",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#F39C12", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="tone1">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                    <value name="freq">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                    <value name="time">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="tone2">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                    <value name="freq">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="tone3">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                    <value name="time">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="no_tone">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        
        {
            xml: `
                <block type="play_rtttl">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                   <value name="song">
                        <shadow type="text">
                            <field name="TEXT">A-Team:d=8,o=5,b=125:4d#6,a#,2d#6,16p,g#,4a#,4d#.,p,16g,16a#,d#6,a#,f6,2d#6,16p,c#.6,16c6,16a#,g#.,2a#</field>
                        </shadow>
                    </value>
                 </block>
            `
        },
        {
            xml: `
                <block type="play_song">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    //"play_rtttl",
    //"play_song"
    ]
});
