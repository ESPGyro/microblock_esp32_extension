({
    name: Blockly.Msg.typecast, // Category Name
    description: "TypeCast Tool",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#F1C40F", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="number_cast">
                    <value name="string_text">
                        <shadow type="text">
                            <field name="TEXT">text</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="string_cast">
                   <value name="number_value">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                 </block>
            `
        },
        {
            xml: `
                <block type="bytes_cast">
                    <value name="byte_string">
                        <shadow type="text">
                            <field name="TEXT">text</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="bytes_cast_with_nr">
                    <value name="bytes_string">
                        <shadow type="text">
                            <field name="TEXT">text</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="string_startwith">
                    <value name="string_1">
                        <shadow type="text">
                            <field name="TEXT">text</field>
                        </shadow>
                    </value>
                     <value name="string_2">
                        <shadow type="text">
                            <field name="TEXT">text</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="string_contain">
                    <value name="string_1">
                        <shadow type="text">
                            <field name="TEXT">text</field>
                        </shadow>
                    </value>
                     <value name="string_2">
                        <shadow type="text">
                            <field name="TEXT">text</field>
                        </shadow>
                    </value>
                </block>
            `
        }
      ]
});
