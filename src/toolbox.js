export default (Blockly) => {
    return (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <category name="{{ TOOLBOX_LOGIC }}" colour="#5b80a5">
            <block type="controls_if" />
            <block type="logic_compare">
                <field name="OP">EQ</field>
            </block>
            <block type="logic_operation">
                <field name="OP">AND</field>
            </block>
            <block type="logic_negate" />
            <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </block>
            <block type="logic_null" />
            <block type="logic_ternary" />
        </category>
        <category name="{{ TOOLBOX_LOOPS }}" colour="#5ba55b">
            <block type="s4d_forever">
            </block>
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_whileUntil">
                <field name="MODE">WHILE</field>
            </block>
            <block type="controls_for">
                <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
                <value name="BY">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_forEach">
                <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
            </block>
            <block type="controls_flow_statements">
                <field name="FLOW">BREAK</field>
            </block>
        </category>
        <category name="{{ TOOLBOX_MATH }}" colour="#5b67a5">
            <block type="math_number">
                <field name="NUM">0</field>
            </block>
            <block type="math_arithmetic">
                <field name="OP">ADD</field>
                <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_single">
                <field name="OP">ROOT</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">9</field>
                    </shadow>
                </value>
            </block>
            <block type="math_trig">
                <field name="OP">SIN</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">45</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constant">
                <field name="CONSTANT">PI</field>
            </block>
            <block type="math_number_property">
                <mutation divisor_input="false" />
                <field name="PROPERTY">EVEN</field>
                <value name="NUMBER_TO_CHECK">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="math_round">
                <field name="OP">ROUND</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">3.1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_on_list">
                <mutation op="SUM" />
                <field name="OP">SUM</field>
            </block>
            <block type="math_modulo">
                <value name="DIVIDEND">
                    <shadow type="math_number">
                        <field name="NUM">64</field>
                    </shadow>
                </value>
                <value name="DIVISOR">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constrain">
                <value name="VALUE">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="LOW">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="HIGH">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_int">
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_float" />
        </category>
        <category name="{{ TOOLBOX_TEXT }}" colour="#5ba58c">
            <block type="text">
                <field name="TEXT" />
            </block>
            <block type="text_join">
                <mutation items="2" />
            </block>

            <block type="s4d_replace">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="REPLACE">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
                <value name="WITH">
                    <shadow type="text">
                        <field name="TEXT">b</field>
                    </shadow>
                </value>                
            </block>

            <block type="s4d_newline"></block>
            <block type="text_append">
                <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT" />
                    </shadow>
                </value>
            </block>
            <block type="text_length">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_starts_with">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="SUBSTRING">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
            </block>

            <block type="s4d_includes">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="INCLUDES">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
            </block>

            <block type="text_isEmpty">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT" />
                    </shadow>
                </value>
            </block>
            <block type="text_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
                <value name="FIND">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_charAt">
                <mutation at="true" />
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
            </block>
            <block type="text_getSubstring">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
            </block>
            <block type="text_changeCase">
                <field name="CASE">UPPERCASE</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_trim">
                <field name="MODE">BOTH</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="{{ TOOLBOX_LISTS }}" colour="#745ba5">
            <block type="lists_create_with">
                <mutation items="0" />
            </block>
            <block type="lists_create_with">
                <mutation items="3" />
            </block>
            <block type="lists_repeat">
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_length" />
            <block type="lists_isEmpty" />
            <block type="lists_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getIndex">
                <mutation statement="false" at="true" />
                <field name="MODE">GET</field>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_setIndex">
                <mutation at="true" />
                <field name="MODE">SET</field>
                <field name="WHERE">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getSublist">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_split">
                <mutation mode="SPLIT" />
                <field name="MODE">SPLIT</field>
                <value name="DELIM">
                    <shadow type="text">
                        <field name="TEXT">,</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_sort">
                <field name="TYPE">NUMERIC</field>
                <field name="DIRECTION">1</field>
            </block>
        </category>
        <category name="{{ TOOLBOX_COLORS }}" colour="#a5745b">
            <block type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </block>
            <block type="colour_random" />
            <block type="colour_rgb">
                <value name="RED">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="GREEN">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="BLUE">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="colour_blend">
                <value name="COLOUR1">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#ff0000</field>
                    </shadow>
                </value>
                <value name="COLOUR2">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#3333ff</field>
                    </shadow>
                </value>
                <value name="RATIO">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>
        </category>
        <sep />
        <category name="{{ TOOLBOX_VARIABLES }}" colour="#a55b80" custom="VARIABLE" />
        <category name="{{ TOOLBOX_FUNCTIONS }}" colour="#995ba5" custom="PROCEDURE" />
        <category name="{{ TOOLBOX_OTHER }}" colour="#D14081">
            <block type="s4d_current"></block>
            <block type="return"></block>
            <block type="s4d_run_save_output"></block>
            <block type="s4d_wait_seconds">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>
        </category>
        <sep />
        <category name="{{ TOOLBOX_BASE }}" colour="#F46580">
        <label text="%{BKY_MANDATORY_BLOCKS}" web-class="boldtext"></label>
            <block type="s4d_login">
                <value name="TOKEN">
                    <block type="text">
                        <field name="TEXT">Your bot token</field>
                    </block>
                </value>
            </block>
            <label text="%{BKY_BASE_BLOCKS}"></label>
            <block type="s4d_on_connected"></block>
            <label text="%{BKY_BOT_INFORMATIONS}"></label>
            <block type="s4d_bot_ping"></block>
            <block type="s4d_bot_server_count"></block>
            <label text="%{BKY_BOT_ACTIONS}"></label>
            <block type="s4d_set_bot_game"></block>
        </category>
        <category name="{{ TOOLBOX_E_MESSAGES }}" colour="#41AAC0">
            <label text="%{BKY_MESSAGE_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_MESSAGES}"></label>
            <block type="s4d_on_message"></block>
            <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>
            <block type="s4d_message_content"></block>
            <block type="s4d_message_id"></block>
            <block type="s4d_message_author"></block>
            <block type="s4d_mentioned_member"></block>
            <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"></label>
            <block type="s4d_message_channel"></block>
            <block type="s4d_message_guild"></block>
            <label text="%{BKY_RELATED_TO_MESSAGE_STRINGS}"></label>
            <block type="s4d_message_author_raw"></block>
            <block type="s4d_message_channel_raw"></block>
            <block type="s4d_message_guild_raw"></block>
            <label text="%{BKY_MESSAGE_ACTIONS}"></label>
            <block type="s4d_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete"></block>
            <block type="s4d_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_TOOLS}"></label>
            <block type="s4d_message_embed"></block>
        </category>
        <category name="Misc" colour="#731627">
        <label text="Misc cmd" web-class="boldtext"></label>
        <block type="s4d_bot_shutdown"></block>
        </category>
        <category name="Edited" colour="#7289da">
            <label text="Dont expect much as its my 2 nd day making blocks" web-class="boldtext"></label>
            <block type="when_message_is_edited"></block>
            <label text="New message stuff" web-class="boldtext"></label>
            <block type="s4d_newmessage_content"></block>
            <block type="s4d_newmsg_del"></block>
            <block type="newmsg_member"></block>
            <label text="Old message stuff" web-class="boldtext"></label>
            <block type="s4d_oldmessage_content"></block>
            <block type="new_message_server"></block>
            <block type="newmsg_timestamp"></block>
            
            <block type="newmsg_channel"></block>
        </category>
        <category name="{{ TOOLBOX_E_JOINS }}" colour="#EABB11">
            <label text="%{BKY_JOINS_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_JOINS}"></label>
            <block type="s4d_on_member_join"></block>
            <label text="%{BKY_JOINING_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_joining_member"></block>
            <block type="s4d_joining_guild"></block>
            <label text="%{BKY_RELATED_TO_JOIN_STRINGS}"></label>
            <block type="s4d_joining_member_raw"></block>
            <block type="s4d_joining_guild_raw"></block>
        </category>
        <category name="{{ TOOLBOX_E_LEAVES }}" colour="#778899">
            <label text="%{BKY_LEAVES_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_LEAVES}"></label>
            <block type="s4d_on_member_leave"></block>
            <label text="%{BKY_LEAVING_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_leaving_guild"></block>
            <label text="%{BKY_RELATED_TO_LEAVE_STRINGS}"></label>
            <block type="s4d_leaving_member_raw"></block>
            <block type="s4d_leaving_guild_raw"></block>
        </category>
        <category name="{{ TOOLBOX_E_REACTIONS }}" colour="#89674A">
            <label text="%{BKY_REACT_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_REACT}"></label>
            <block type="s4d_on_react_added"></block>
            <block type="s4d_on_react_removed"></block>
            <label text="%{BKY_REACT_INFORMATIONS}"></label>
            <block type="s4d_react_message_id"></block>
            <block type="s4d_react_emoji"></block>
            <block type="s4d_react_member"></block>
            <block type="s4d_bot_cpus"></block>
        </category>
        <sep />
        <category name="{{ TOOLBOX_SERVER }}" colour="#D85E47">
            <label text="%{BKY_FIND_SERVER}"></label>
            <block type="s4d_get_server"></block>
            <label text="%{BKY_LABEL_SERVER_INFOS}"></label>
            <block type="s4d_server_name"></block>
            <block type="s4d_member_count"></block>
            <block type="s4d_icon_url"></block>
            <block type="s4d_boost_level"></block>
            <block type="s4d_server_owner"></block>
            <label text="%{BKY_LABEL_MODIFY_SERVER}"></label>
            <block type="s4d_set_server_name"></block>
        </category>
        <category name="{{ TOOLBOX_CHANNELS }}" colour="#a55b80">
        <block type="s4d_create_embed_then"></block>
        <block type="set_perms"></block>
        <block type="set_perms_parent"></block>
            <label text="%{BKY_FIND_CHANNEL}"></label>
            <block type="s4d_get_channel"></block>
            <label text="%{BKY_SEND_CHANNEL_LABEL}"></label>
            <block type="s4d_send_channel"></block>
            <label text="%{BKY_FORMS}"></label>
            <block type="s4d_send_wait_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ SEND_WAIT_REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_send_wait_reply_value"></block>

            <label text="%{BKY_CHANNEL_MESSAGE_ACTIONS}"></label>
             <block type="s4d_purge">
                <value name="AMOUNT">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value> 
            </block>

            <label text="%{BKY_CHANNEL_ACTIONS}"></label>
            <block type="s4d_create_channel"></block>
        </category>
        <category name="{{ TOOLBOX_ROLES }}" colour="#2EB66B">
            <label text="%{BKY_FIND_ROLE}"></label>
            <block type="s4d_get_role"></block>
            <label text="%{BKY_ROLE_ASSIGNMENT}"></label>
            <block type="s4d_add_role"></block>
            <block type="s4d_remove_role"></block>
        </category>
        <category name="{{ TOOLBOX_MEMBERS }}" colour="#187795">
            <label text="%{BKY_FIND_MEMBER}"></label>
            <block type="s4d_get_member"></block>
            <label text="%{BKY_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_member_id"></block>
            <block type="s4d_member_discriminator"></block>
            <block type="s4d_member_tag"></block>
            <block type="s4d_member_username"></block>
            <block type="s4d_member_has_permission"></block>
            <block type="s4d_member_is_bot"></block>
            <label text="%{BKY_LABEL_MEMBER_ACTIONS}"></label>
            <block type="s4d_kick_member"></block>
            <block type="s4d_ban_member"></block>

            <block type="s4d_send_member"></block>

            <block type="s4d_set_member_nickname"></block>
        </category>
        <sep />
        <category name="{{ TOOLBOX_DATABASE }}" colour="#FF0000">
            <label text="%{BKY_LABEL_READ_DB}"></label>
            <block type="s4d_get_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_has_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_LABEL_UPDATE_DB}"></label>
            <block type="s4d_set_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_add_data">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_subtract_data">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="Slash" colour="#731627">
        <label text="Coming soon in few weeks!" web-class="boldtext"></label>
        </category>
    </xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
    return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
}))};