({
    name: Blockly.Msg.line, // Category Name
    description: "Send notification from everywhere to LINE",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#28B463", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="linenotify">
                    <value name="token">
                        <shadow type="text">
                            <field name="TEXT">--token--</field>
                        </shadow>
                    </value>
                    <value name="m1">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="m2">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="m3">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="m4">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="m5">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="m6">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="iftttlinenotify">
                    <value name="event">
                        <shadow type="text">
                            <field name="TEXT">--event--</field>
                        </shadow>
                    </value>
                     <value name="apikey">
                        <shadow type="text">
                            <field name="TEXT">--key--</field>
                        </shadow>
                    </value>
                   <value name="m1">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="m2">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="m3">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                   
                </block>
            `
        },
        {
            xml: `
                <block type="linenotify_package">
                    <value name="auth">
                        <shadow type="text">
                            <field name="TEXT">--auth--</field>
                        </shadow>
                    </value>
                    <value name="msg">
                        <shadow type="text">
                            <field name="TEXT">Hello from microBlock</field>
                        </shadow>
                    </value>
                   <value name="urlpicId">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="stickerPackageId">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="stickerId">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                </block>
            `
        },
       "get_newline",
    ],
    chip: [
        "ESP32" // Chip support
    ]
});
