({
    name: Blockly.Msg.switch1, // Category Name
    description: "Switch",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
                        {
                            xml: `
                                <block type="S1_pin">
                                    <value name="s1pin">
                                        <shadow type="math_number">
                                            <field name="NUM">32</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
			{
                            xml: `
                                <block type="S2_pin">
                                    <value name="s2pin">
                                        <shadow type="math_number">
                                            <field name="NUM">15</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
              //          "switch_on_pressed",
                        "switch_on_press",
                        "switch_on_release",
                        "switch_is_press",
                        "switch_is_release",
                        "switch_get_value"                                              
    ]
});
