({
    name: Blockly.Msg.servo_name, // Category Name
    description: "Set angle to Servo motor",
    author: "microBlock",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#0271D9", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="servo1">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">19</field>
                        </shadow>
                    </value>
                    <value name="angle">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                    </value>
                </block>
            `
        },
       {
            xml: `
                <block type="servo2">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">32</field>
                        </shadow>
                    </value>
                    <value name="angle">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
