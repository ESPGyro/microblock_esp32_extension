({
    name: Blockly.Msg.http_name, // Category Name
    description: "GET API",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#2ECC71", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="http_get">
                    <value name="get_url">
                        <shadow type="text">
                            <field name="TEXT">https://microblock.app/about.html</field>
                        </shadow>
                    </value>
                 </block>
            `
        },
        {
            xml: `
                <block type="openweather_connect">
                    <value name="url">
                        <shadow type="text">
                            <field name="TEXT">http://api.openweathermap.org/data/2.5/weather</field>
                        </shadow>
                    </value>
                    <value name="city">
                        <shadow type="text">
                            <field name="TEXT">Hsinchu,TW</field>
                        </shadow>
                    </value>
                    <value name="api_key">
                        <shadow type="text">
                            <field name="TEXT">XX</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="ubidots_post">
                    <value name="url">
                        <shadow type="text">
                            <field name="TEXT">https://things.ubidots.com/api/v1.6/devices/</field>
                        </shadow>
                    </value>
                   <value name="label">
                        <shadow type="text">
                            <field name="TEXT">esp32</field>
                        </shadow>
                    </value>
                   <value name="token">
                        <shadow type="text">
                            <field name="TEXT">XX</field>
                        </shadow>
                    </value>
                    <value name="var1">
                        <shadow type="text">
                            <field name="TEXT">temperature</field>
                        </shadow>
                    </value>
                    <value name="value1">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="var2">
                        <shadow type="text">
                            <field name="TEXT">humidity</field>
                        </shadow>
                    </value>
                    <value name="value2">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="var3">
                        <shadow type="text">
                            <field name="TEXT">other</field>
                        </shadow>
                    </value>
                    <value name="value3">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                 </block>
            `
        },
        {
            xml: `
                <block type="thingspeak_write">
                   <value name="key">
                        <shadow type="text">
                            <field name="TEXT">XX</field>
                        </shadow>
                    </value>
                    <value name="field1">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="field2">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="field3">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="field4">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="field5">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="field6">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="field7">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                     <value name="field8">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                  </block>
            `
        },
        "http_get_status_code",
        "http_get_data_text",
        "http_get_data_number",
        "http_is_ok"
    ]
});
