({
    name: Blockly.Msg.oled, // Category Name
    description: "Show text and image on OLED Display",
    author: "microBlock",
    category: "Display",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    //icon: "microblock://./images/icon/oled.png", 
    color: "#2980B9", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "oled_init",
       {
            xml: `
                <block type="oled_soft_init">
                   <value name="scl">
                        <shadow type="math_number">
                            <field name="NUM">32</field>
                        </shadow>
                    </value>
                   <value name="sda">
                        <shadow type="math_number">
                            <field name="NUM">33</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        //add for rotato block in menu
        {
            xml: `
                <block type="oled_rotate">
                   <value name="rotate_dir">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="oled_draw_text">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                        </shadow>
                    </value>
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "oled_big5_font11",
        "oled_big5_font24",
        "del_font_11_24",
        {
            xml: `
                <block type="oled_draw_big5_text_size">
                    <value name="text_b">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="x_b">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y_b">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="size">
                        <shadow type="math_number">
                            <field name="NUM">11</field>
                        </shadow>
                    </value>
                </block>
            `
        },

        
        {
            xml: `
                <block type="oled_draw_big_num">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">123</field>
                        </shadow>
                    </value>
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                                <block type="oled_draw_png">
                                    <value name="w">
                                        <shadow type="math_number">
                                            <field name="NUM">64</field>
                                        </shadow>
                                    </value>
                                    <value name="h">
                                        <shadow type="math_number">
                                            <field name="NUM">46</field>
                                        </shadow>
                                    </value>
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        }, 
          {
            xml: `
                <block type="oled_QR_text">
                    <value name="qr_text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                        </shadow>
                    </value>
                    <value name="qr_s">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                    <value name="qr_x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="qr_y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },        
        {
            xml: `
                <block type="oled_draw_line">
                    <value name="x1">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y1">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="x2">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                    <value name="y2">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="oled_draw_rect">
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="width">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                    <value name="height">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "oled_fill",
        "oled_clear",
        "oled_show",
        "oled_scroll"
    ]
});
