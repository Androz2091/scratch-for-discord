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
						<block type="text_multiline">
									<field name="TEXT" />
					</block>
            <block type="text_join">
                <mutation items="2" />
            </block>

            <block type="text_replace">
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
						<block type="text_isEmpty"/>
						<block type="text_reverse"/>
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
						<block type="text_count"></block>
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
						<block type="lists_reverse"/>
						<block type="lists_sort" />
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
        <sep class="bt" />
        <category name="{{ TOOLBOX_VARIABLES }}" colour="#a55b80" custom="VARIABLE" />
        <category name="{{ TOOLBOX_FUNCTIONS }}" colour="#995ba5" custom="PROCEDURE" />
        <category name="{{ TOOLBOX_OTHER }}" colour="#D14081"> 
            <block type="s4d_print"></block>
            <block type="s4d_current"></block>
            <block type="s4d_run_save_output"></block>
            <block type="s4d_wait_seconds">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_eval"></block>
						<block type="s4d_exec"/>
            <block type="s4d_try_and_catch"></block>
            <block type="s4d_return"></block>
            <block type="s4d_string_to_number"></block>
        </category>
				<sep class="bt"/>
				<category name="{{ JOSE }}" colour="#00664d">
				<category name="{{ DISCORDCANVAS }}">
					<category name="{{ WELCOME }}">
						<block type="s4d_create_welcome_then"/>
						<block type="s4d_set_username"/>
						<block type="s4d_set_member_count"/>
						<block type="s4d_set_discriminator"/>
						<block type="s4d_set_background"/>
						<block type="s4d_set_avatar"/>
						<block type="s4d_set_guild_name"/>
						<block type="s4d_set_color"/>
						<block type="s4d_send_in_channel"/>
					</category>
					<category name="{{ GOODBYE }}">
						<block type="s4d_create_goodbye_then"/>
						<block type="s4d_set_username"/>
						<block type="s4d_set_member_count"/>
						<block type="s4d_set_discriminator"/>
						<block type="s4d_set_background"/>
						<block type="s4d_set_avatar"/>
						<block type="s4d_set_guild_name"/>
						<block type="s4d_set_color"/>
						<block type="s4d_send_in_channel"/>
					</category>
					<category name="{{ RANKCARD }}">
						<block type="s4d_create_rankcard_then"/>
						<block type="s4d_set_badge"/>
						<block type="s4d_set_xp"/>
						<block type="s4d_set_username"/>
						<block type="s4d_set_background"/>
						<block type="s4d_set_avatar"/>
						<block type="s4d_set_rank_name"/>
						<block type="s4d_set_rank"/>
						<block type="s4d_set_level"/>
						<block type="s4d_set_reputation"/>
						<block type="s4d_set_color_r"/>
						<label text="%{BKY_TEXT1}"/>
						<label text="%{BKY_TEXT2}"/>
						<label text="%{BKY_TEXT3}"/>
						<label text="%{BKY_TEXT4}"/>
						<block type="s4d_set_text"/>
						<block type="s4d_set_transparency"/>
						<block type="s4d_set_radius"/>
						<block type="s4d_set_addon"/>
						<block type="s4d_send_in_channel"/>
					</category>
				</category>
				        <category name="{{ EMBED }}" colour="#40BF4A">
        <label text="Create A Perfect Embed" web-class="boldtext"></label>
            <block type="s4d_create_embed_then"></block>
            <label text="%{BKY_COLOR_MESSAGE}"></label>
            <block type="s4d_create_embed_then_set_color"></block>
            <block type="s4d_create_embed_then_set_author"></block>
            <block type="s4d_create_embed_then_set_title"></block>
            <block type="s4d_create_embed_then_set_thumbnail"></block>
            <label text="%{BKY_HYPERLINK_MESSAGE}"></label>
            <label text="%{BKY_HYPERLINK_MESSAGE_2}"></label>
            <block type="s4d_create_embed_then_set_description"></block>
            <block type="s4d_create_embed_then_add_field"></block>
            <block type="s4d_create_embed_then_set_image"></block>
            <block type="s4d_create_embed_then_set_footer"></block> 
            <label text="%{BKY_SEND_EMBED}"></label>
            <block type="s4d_create_embed_then_send"></block>
    </category>
					        <category name="{{ TOOLBOX_E_DELETED }}" colour="#d96e26">
           <label text="%{BKY_DELETED_RELATED_BLOCKS}" web-class="boldtext"></label>
           <label text="%{BKY_DELETED_EVENT}"></label>
           <block type="s4d_on_deleted"></block>
           <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>
           <block type="s4d_message_content_deleted"></block>
           <block type="s4d_message_server_deleted"></block>
           <block type="s4d_message_channel_deleted"></block>
           <block type="s4d_message_author_deleted"></block>
        </category>
        <category name="{{ TOOLBLOX_E_ADDED }}" colour="#0000cc">
        <label text="%{BKY_ADDED_RELATED_BLOCKS}" web-class="boldtext"></label>
        <label text="%{BKY_DETECT_ADDED}"></label>
        <block type="s4d_on_added"></block>
        <label text="%{BKY_ADDED_INFORMATIONS}"></label>
        <block type="s4d_add_server_id"></block> 
        <block type="s4d_add_server_name"></block>
        <block type="s4d_add_server_icon"></block>
        <block type="s4d_add_server_owner"/>
        </category>
        <category name="{{ TOOLBOX_BUTTON }}" colour="#059CA1">
            <label text="%{BKY_BUTTON_EVENT}"></label>
            <block type="s4d_on_click"></block>
            <label text="%{BKY_BUTTON_EVENT_BLOCKS}"></label>
            <block type="s4d_button_click_id"></block>
            <block type="s4d_button_think"></block>
            <block type="s4d_button_reply"></block>
            <block type="s4d_button_edit"></block>
            <block type="s4d_button_delete_reply"></block>
            <block type="s4d_update"></block>
            <label text="%{BKY_BUTTON_BLOCKS}"></label>
            <block type="s4d_send_button"></block>
            <block type="s4d_button_style"></block>
            <block type="s4d_button_row"></block>
            <block type="s4d_message_row_block"></block>
        </category>
      
        <category name="{{ TOOLBOX_MENU }}" colour="#059CA1">
            <label text="%{BKY_BUTTON_EVENT}"></label>
            <block type="s4d_on_menu_click"></block>
            <label text="%{BKY_BUTTON_EVENT_BLOCKS}"></label>
            <block type="s4d_menu_value"></block>
            <block type="s4d_menu_click_id"></block>
            <block type="s4d_menu_reply"></block>
            <block type="s4d_button_think"></block>
            <block type="s4d_button_edit"></block>
            <block type="s4d_button_delete_reply"></block>
            <block type="s4d_update"></block>
            <label text="%{BKY_BUTTON_BLOCKS}"></label>
            <block type="s4d_button_menu"></block>
            <block type="s4d_message_menu_block"></block>
        </category>
        <category name="{{ TOOLBOX_WEBHOOK }}" colour="#f5dfa2">
            <block type="s4d_create_webhook_then"></block>
            <block type="s4d_edit_webhook"></block>
            <block type="s4d_webhook_id"></block>
            <block type="s4d_webhook_token"></block>
            <block type="s4d_get_webhook_then"></block>
            <block type="s4d_get_edit_webhook"></block>
            <block type="s4d_send_webhook"></block>
        </category>
        <category name="{{ TOOLBOX_MUSIC }}" colour="#009966">
            <label text="%{BKY_MUSIC_EVENT}"></label>
            <block type="s4d_track_playing"></block>
            <block type="s4d_track_added"></block>
            <block type="s4d_queue_finished"></block>
            <label text="%{BKY_MUSIC_INFO}"></label>
            <block type="s4d_track_name"></block>
            <block type="s4d_track_channel"></block>
            <block type="s4d_track_url"></block>
            <block type="s4d_track_author"></block>
            <block type="s4d_track_thumbnail"></block>
            <block type="s4d_track_views"></block>
            <block type="s4d_track_duration"></block>
            <label text="%{BKY_MUSIC_BLOCKS}"></label>
            <block type="s4d_bot_voice_channel"></block>
            <block type="s4d_voice_channel"></block>
            <block type="s4d_voice_channel_id"></block>
            <block type="s4d_get_queue"></block>
            <block type="s4d_playing"></block>
            <block type="s4d_current_track"></block>
            <block type="s4d_connected"></block>
            <block type="s4d_search"></block>
            <block type="s4d_loop"></block>
            <block type="s4d_volume"></block>
            <block type="s4d_back"></block>
            <block type="s4d_resume"></block>
            <block type="s4d_pause"></block>
            <block type="s4d_stop"></block>
            <block type="s4d_skip"></block>
            <block type="s4d_play"></block>
            <block type="s4d_create_queue"></block>
            <block type="s4d_connect"></block>
        </category>
				</category>
				<category name="{{ MRREDO }}" colour="#FF0000">
        <category name="Event" colour="#00b3ff">
        <category name="Event channel" colour="#00b3ff">
        <block type="on_channelCreate"></block>
        <block type="cc_name"></block>
        <block type="cc_channel"></block>
        <block type="on_channelUpdate"></block>
        <block type="cu_name"></block>
        <block type="cu_channel"></block>
        <block type="on_channelDelete"></block>
        <block type="cd_name"></block>
        <block type="cd_channel"></block>
        </category>
        <category name="Event emoji" colour="#00b3ff">
        <block type="on_emojicreate"></block>
        <block type="ec_name"></block>
        <block type="on_emojiupdate"></block>
        <block type="eu_name"></block>
        <block type="on_emojidelete"></block>
        <block type="ed_name"></block>
        </category>
        <category name="Event role" colour="#00b3ff">
        <block type="on_rolecreate"></block>
        <block type="rc_name"></block>
        <block type="on_roleupdate"></block>
        <block type="ru_name"></block>
        <block type="on_roledelete"></block>
        <block type="rd_name"></block>
        </category>
        <category name="Event sticker" colour="#00b3ff">
        <block type="on_stickercreate"></block>
        <block type="sc_name"></block>
        <block type="on_stickerdelete"></block>
        <block type="sd_name"></block>
        <block type="on_stickerupdate"></block>
        <block type="su_name"></block>
        </category>
        </category>
					<category name="register" colour="#65700c">
        <label text="Register slash commands" web-class="boldtext"></label>
        <block type="guild_s"></block>
        <block type="guild_g"></block>
        <label text="Make slash commands" web-class="boldtext"></label>
        <block type="register_var"></block>
        <label text="Register context menu" web-class="boldtext"></label>
        <block type="register_c_m"></block>
        <label text="comma used for multiple slash commands in 1 variabel" web-class="boldtext"></label> 
        <block type="comma"></block>
        </category>
        <category name="slash" colour="#ff2f00">
        <label text="%{BKY_T_RS}"></label>
        <block type="on_slash"></block>
        <block type="interaction_name"></block>
        <block type="options"></block>
        <block type="interaction_author"></block>
        <block type="interaction_channel"></block>
        <block type="interaction_guild"></block>
        <block type="interaction_voice_channel"></block>
        <block type="interaction_voice_channel_id"></block>
        <block type="bot_voice_channel_id"></block>
        <block type="slash_reply"></block>
        <block type="slash_edit"></block>
        <block type="send_m_embed_string"></block>
        </category>
				        <category name="context menu" colour="#f0f255">
        <label text="Event" web-class="boldtext"></label>
        <block type="on_menu"></block>
        <label text="Stuff" web-class="boldtext"></label>
        <block type="m_name"></block>
        <block type="m_member"></block>
        <block type="m_channel"></block>
        <block type="m_guild"></block>
        <block type="c_options"></block>
        <label text="Reply and Edit" web-class="boldtext"></label>
        <block type="m_reply"></block>
        <block type="m_edit"></block>
        <label text="send embed" web-class="boldtext"></label>
        <block type="send_m_embed_string"></block>
        </category>
				<category name="button" colour="#ff0019">
        <label text="%{BKY_T_EDI}"></label>
        <block type="on_button"></block>
        <label text="%{BKY_T_BS}"></label>
        <block type="button_id"></block>
        <block type="button_author"></block>
        <block type="button_channel"></block>
        <block type="button_guild"></block>
        <block type="b_style"></block>
        <label text="%{BKY_T_B_SHIP}Reply and edit and send embed"></label>
        <block type="b_send_msg"></block>
        <block type="button_reply"></block>
        <block type="button_edit"></block>
        <block type="send_m_embed_string"></block>
        <label text="%{BKY_T_CB}"></label>
        <block type="b_create">
                    <value name="B_NAME">
                        <shadow type="text">
                            <field name="TEXT">button_name</field>
                        </shadow>
                    </value>
                </block>
        <label text="%{BKY_T_BR}"></label>
        <block type="b_row">
                    <value name="BUTTON_NAME">
                        <shadow type="text">
                            <field name="TEXT">name</field>
                        </shadow>
                    </value>
                </block>
        <block type="b_row_comp">
                <value name="BUTTON">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="embed" colour="#40BF4A">
        <label text="Create A Perfect Embed" web-class="boldtext"></label>
            <block type="s4d_m_create_embed_then"></block>
            <label text="%{BKY_COLOR_MESSAGE}"></label>
            <block type="s4d_m_create_embed_then_set_color"></block>
            <block type="s4d_m_create_embed_then_set_author"></block>
            <block type="s4d_m_create_embed_then_set_title"></block>
            <block type="s4d_m_create_embed_then_set_thumbnail"></block>
            <label text="%{BKY_HYPERLINK_MESSAGE}"></label>
            <label text="%{BKY_HYPERLINK_MESSAGE_2}"></label>
            <block type="s4d_m_create_embed_then_set_description"></block>
            <block type="s4d_m_create_embed_then_add_field"></block>
            <block type="s4d_m_create_embed_then_add_blankfield"></block>
            <block type="s4d_m_create_embed_then_set_image"></block>
            <block type="s4d_m_create_embed_then_set_footer"></block> 
            <block type="s4d_m_create_embed_then_set_time"></block>
            <label text="%{BKY_SEND_EMBED}"></label>
            <block type="s4d_m_create_embed_then_send"></block>
    </category>
		        <category name="edited" colour="#e85a66">
        <label text="%{BKY_T_EDI}" web-class="boldtext"></label>
        <block type="when_message_is_edited"></block>
        <block type="s4d_replys"></block>
        <label text="%{BKY_T_NMS}" web-class="boldtext"></label>
        <block type="newmsg_channel"></block>
        <block type="new_message_server"></block>
        <block type="s4d_newmessage_content"></block>
        <block type="newmsg_member"></block>
        <block type="s4d_newmsg_del"></block>
        <block type="newmsg_timestamp"></block>
        </category>
				<category name="Mongo" colour="#0db550">
        <label text="connect to MongoDB"></label>
        <block type="mongo_on"></block>
        <block type="mongo_connect">
        <value name="URL">
        <shadow type="text">
            <field name="TEXT">mongodb url</field>
        </shadow>
    </value>
        </block>
        <label text="nerd blocks"></label>
        <block type="mongo_get_data">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_has_data">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_set_data">
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
        <block type="mongo_push_data">
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
    <block type="mongo_pull_data">
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
        <block type="mongo_delete_data">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_add_data">
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
        <block type="mongo_subtract_data">
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
		</category>
        <sep class="bt"/>
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
            <block type="s4d_get_bot"></block>
						<block type="s4d_bot_amount"/>
            <label text="%{BKY_BOT_ACTIONS}"></label>
            <block type="s4d_set_bot_game"></block>
            <block type="s4d_set_bot_stream"></block>
            <block type="s4d_bot_shutdown"></block>
        </category>
        <category name="{{ TOOLBOX_E_MESSAGES }}" colour="#41AAC0">
            <label text="%{BKY_MESSAGE_RELATED_BLOCKS}" web-class="boldtext"></label>
						<label text="%{BKY_FIND_MESSAGE}"></label>
						<block type="s4d_get_msg_then"></block>
            <label text="%{BKY_DETECT_MESSAGES}"></label>
            <block type="s4d_on_message"></block>
            <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>
            <block type="s4d_message_content"></block>
            <block type="s4d_message_id"></block>
            <block type="s4d_message_author"></block>
            <block type="s4d_message_member"/>
            <block type="s4d_mentioned_member"></block>
            <block type="s4d_mentioned_channel"></block>
            <block type="s4d_mentioned_role"></block>
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
            <block type="s4d_reaction_wait_added_reaction">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_wait_react_emoji_id"></block>
            <block type="s4d_wait_react_emoji_name"></block>
            <block type="s4d_reply_then"> 
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_edit">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_reply_delete"></block>
            <block type="s4d_reply_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_reply_id"></block>
						<block type="s4d_pin"/>
						<block type="s4d_unpin"/>
            <block type="s4d_message_embed"></block>
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
						<block type="s4d_react_count"></block>
        </category>
        <sep class="bt"/>
        <category name="{{ TOOLBOX_SERVER }}" colour="#D85E47">
            <label text="%{BKY_FIND_SERVER}"></label>
            <block type="s4d_get_server"></block>
            <block type="s4d_get_all_server"></block>
            <block type="s4d_get_all_server_server"></block>
            <label text="%{BKY_LABEL_SERVER_INFOS}"></label>
            <block type="s4d_server_name"></block>
            <block type="s4d_member_count"></block>
            <block type="s4d_icon_url"></block>
            <block type="s4d_server_id"></block>
            <block type="s4d_boost_level"></block>
            <block type="s4d_server_owner"></block>
            <block type="s4d_number_of__server"></block>
            <block type="s4d_server_created_at"></block>
            <block type="s4d_leave_server"></block>
            <label text="%{BKY_LABEL_MODIFY_SERVER}"></label>
            <block type="s4d_set_server_name"></block>
        </category>
        <category name="{{ TOOLBOX_CHANNELS }}" colour="#a55b80">
            <label text="%{BKY_FIND_CHANNEL}"></label>
            <block type="s4d_get_channel"></block>
            <block type="s4d_get_all_channel"></block>
            <block type="s4d_get_all_channel_channel"></block>
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
            <block type="s4d_is_channel_nsfw"/>
            <block type="slowmode"></block>
            <block type="set_perms"></block>
            <block type="set_perms_parent"></block>
            <block type="s4d_create_channel"></block>
            <block type="s4d_delete_channel"></block>
        </category>
        <category name="{{ TOOLBOX_ROLES }}" colour="#2EB66B">
            <label text="%{BKY_FIND_ROLE}"></label>
            <block type="s4d_get_role"></block>
            <block type="s4d_get_all_role"></block>
            <block type="s4d_get_all_role_role"></block>
            <label text="%{BKY_ROLE_ASSIGNMENT}"></label>
						<block type="s4d_role_possition"/>
            <block type="s4d_add_role"></block>
            <block type="s4d_remove_role"></block>
            <block type="s4d_delete_role"></block>
            <block type="s4d_has_role"></block>
						<block type="s4d_role_exist"/>
            <block type="s4d_create_role"></block>
            <block type="s4d_set_role_perm"></block>
        </category> 
        <category name="{{ TOOLBOX_MEMBERS }}" colour="#187795">
            <label text="%{BKY_FIND_MEMBER}"></label>
            <block type="s4d_get_member"></block>
            <block type="s4d_get_all"></block>
            <block type="s4d_get_all_member"></block>
            <label text="%{BKY_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_member_id"></block>
            <block type="s4d_member_discriminator"></block>
            <block type="s4d_member_tag"></block>
            <block type="s4d_member_username"></block>
            <block type="s4d_member_icon"></block>
            <block type="s4d_joined_at"></block>
            <block type="s4d_created_at"></block>
            <block type="s4d_member_has_permission"></block>
            <block type="s4d_member_is_bot"></block>
            <label text="%{BKY_LABEL_MEMBER_ACTIONS}"></label>
            <block type="s4d_kick_member"></block>
            <block type="s4d_ban_member"></block>
            <block type="s4d_unban_member"></block>
            <block type="s4d_send_member"></block>

            <block type="s4d_set_member_nickname"></block>
            <label text="%{BKY_FORMS}"></label>
            <block type="s4d_send_wait_reply_dm"></block>
            <block type="s4d_send_wait_reply_dm_value"></block>
        </category>
        <sep class="bt"/>
        <sep class="bt"/>
				<sep class="bt"/>
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
    </xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
    return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
}))};