({
    name: Blockly.Msg.mqtt, // Category Name
    description: "Connect things via MQTT",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#F39C12", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
         {
                            xml: '<label text="MQTT通信積木"></label>',
                        },  
        {
            xml: `
                <block type="mqtt_connect">
                    <value name="host">
                        <shadow type="text">
                            <field name="TEXT">test.mosquitto.org</field>
                        </shadow>
                    </value>
                    <value name="port">
                        <shadow type="math_number">
                            <field name="NUM">1883</field>
                        </shadow>
                    </value>
                    <value name="client_id">
                        <shadow type="text">
                            <field name="TEXT">MyMQTTDevice</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "mqtt_host_ip",
        "machine_id",
        {
            xml: `
                <block type="mqtt_publish">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "mqtt_on_receive",
        "mqtt_connect_broker",
        "mqtt_subscribe",
        "mqtt_get_topic",
        "mqtt_get_number",
        "mqtt_get_text",
        //"mqtt_check_msg",
        "mqtt_try_check_msg",
        {
                            xml: '<label text="工具箱"></label>',
        },
        "controls_forever",
        "controls_if",
        {
                            xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
         },
        "math_number",
        "text",
        "logic_boolean"
    ],
    chip: [
        "ESP32" // Chip support
    ]
});
