({
    name: Blockly.Msg.dhtxx, // Category Name
    description: "Get tem/humd fron DHTxx",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
                            xml: `
                                <block type="dhtxx_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">4</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
        }
    ]
});
