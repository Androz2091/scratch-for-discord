/* eslint-disable */
export default (Blockly, value, searching) => {
    /* eslint-disable */

    const allow_toolbox_search = true

    if (allow_toolbox_search) {
        var toolbox_search_category = `
    
    <category name="Search" colour="#42556e" css-icon="customIcon2 fa fa-search">
    <label text="Search category! Version 1.21"></label>
    <label text=""></label>
    <button text="Search for Block" callbackKey="SEARCH"></button>
    <label text="Click the search category again if nothing happens."></label>
    <label text=""></label>
        <!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->
    </category>
    `
    } else {
        var toolbox_search_category = ``
    }

    var toolbox_xml_contents = (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">

    <!--
    <category name="Tests" colour="#ff0000" popoooopp="LINE HIDDEN FROM SEARCH">
        <block type="jg_tests_doubleDropdown" popoooopp="LINE HIDDEN FROM SEARCH"/>
        <block type="jg_tests_typeChange" popoooopp="LINE HIDDEN FROM SEARCH"/>
        <block type="jg_tests_deleteInput" popoooopp="LINE HIDDEN FROM SEARCH"/>
        <block type="jg_tests_validator" popoooopp="LINE HIDDEN FROM SEARCH"/>
    </category>
    -->
	
    ${toolbox_search_category}
    <category name="Favorites" colour="#FFFF00" css-icon="customIcon fa fa-star">
    	<label text="Add your favorite blocks here by right clicking them and pressing &quot;Add to favorite!&quot;"></label>
                        <!-- FAVORITES_CATEGORY_CONTENT_GOES_HERE_89476138947230470923750327973490 -->
    </category>
    <sep class="bt"/>

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
            
            <block type="jg_logic_is_equal_to_and_is_the_same_type_as"/>

    	<!--<label text="Pending updates"></label>-->

                <block type="s4d_lasercat_switch_switch"></block>
                <block type="lasercat_jg_case_default"></block>
                <!--
                    <block type="s4d_lasercat_switch_case"/>
                    <block type="s4d_lasercat_switch_default"/>
                -->
                <block type="s4d_lasercat_switch_break"></block>
        <label text="ㅤ" web-class="boldtext"></label>
                
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
            <label text="More Options" web-class="boldtext"></label>
            <block type="s4d_forever2">
                <value name="LOG">
                    <shadow type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_forever3">
                <value name="LOG">
                    <shadow type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </shadow>
                </value>
                <value name="DELAY">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>
        <label text="ㅤ" web-class="boldtext"></label>
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
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="{{ TOOLBOX_TEXT }}" colour="#5ba58c">
            <!--
            <block type="text">
                <field name="TEXT"/>
            </block>
			<block type="text_multiline">
				<field name="TEXT"/>
			</block>
            -->
			<block type="jg_text_remake_paragraph_quotes"/>
            <block type="text_join">
                <mutation items="2" />
            </block>
            <!--
            <block type="text_replace">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>               
            </block>
            -->
			<block type="jg_text_remake_in_text_replace_with">
                <value name="ORIGIN">
                    <shadow type="text">
                        <field name="TEXT">aaa</field>
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
            <block type="s4d_ends_with">
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
<block type="weird-to-normal"/>
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
			<block type="jg_text_isboolean">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">true</field>
                    </shadow>
                </value>
            </block>
			<block type="jg_text_booleanfrom">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">true</field>
                    </shadow>
                </value>
            </block>
			<block type="jg_text_hasnumber">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc123</field>
                    </shadow>
                </value>
            </block>
			<block type="jg_text_for_each_letter_in_text_do">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
			<block type="jg_text_for_each_letter_in_text_do_letter"/>
            <block type="jg_text_regex_create_new_regex_of"/>
            <label text="ㅤ" web-class="boldtext"></label>
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
            <block type="list_contains"/>
            <block type="lists_sort"/>
						<block type="lists_reverse"/>
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
            <block type="push_to_list">
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
            <block type="jg_lists_regex_list_of_matches_from_regex_on_text"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="{{ TOOLBOX_COLORS }}" colour="#a5745b">
        
            <block type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </block>
            <block type="colour_random" />
            <block type="fz_color"/>
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
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <sep class="bt" />
        <category name="{{ TOOLBOX_VARIABLES }}" colour="#a55b80" custom="VARIABLE"/>
<category name="Expanded {{ TOOLBOX_VARIABLES }}" colour="#9F5B93">

<label text="Make global/local variables for functions and other stuff"></label>
<label text="Compatible with variables category"></label>
<block type="import_all"><value name="VAR"><shadow type="text"><field name="TEXT"/>hey</shadow></value></block>

<block type="express_var"><value name="VAR"><shadow type="text"><field name="TEXT"/>hey</shadow></value></block>

<block type="blank"><field name="TEXT"/></block>
</category>

        <category name="{{ TOOLBOX_FUNCTIONS }}" colour="#995ba5" custom="PROCEDURE"/>

        <category name="Collections" colour="#a354b3">
        
        <label text="Collections are able to hold data." web-class="boldtext"></label>
        <label text="It's like a list, but you attach a key to the data." web-class="boldtext"></label>
        <label text="You can then grab the data using the key later." web-class="boldtext"></label>
            <block type="collections_create_new_collection"/>
            <block type="collections_set_to_key_in_collection">
                <value name="VALUE">
                    <block type="math_number">
                        <field name="NUM">123</field>
                    </block>
                </value>
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
                <value name="MAP">
                    <block type="variables_get">
                        <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                    </block>
                </value>
            </block>
            <block type="collections_get_from_collection">
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
                <value name="MAP">
                    <block type="variables_get">
                        <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                    </block>
                </value>
            </block>
            <block type="collections_remove_key_in_collection">
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
                <value name="MAP">
                    <block type="variables_get">
                        <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                    </block>
                </value>
            </block>
            <block type="collections_clear_collection">
                <value name="MAP">
                    <block type="variables_get">
                        <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                    </block>
                </value>
            </block>
            <block type="collections_collection_has_key">
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
                <value name="MAP">
                    <block type="variables_get">
                        <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                    </block>
                </value>
            </block>
            <block type="collections_size_of_collection">
                <value name="MAP">
                    <block type="variables_get">
                        <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                    </block>
                </value>
            </block>
            <label text="When storing a collection to a database, it gets converted." web-class="boldtext"></label>
            <label text="This block can be used to bring it back to a usable collection." web-class="boldtext"></label>
            <block type="jg_collections_convert_database_collection_to_collection">
                <value name="DBCOLLECT">
                    <block type="s4d_get_data">
                        <value name="KEY">
                            <shadow type="text">
                                <field name="TEXT">collection</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
        </category>

        <category name="Objects" colour="#BA4A9A">
        
            <label text="Objects are similar to collections, but have more functionality." web-class="boldtext"></label>
            <label text="They also don't get converted when saving into a database!" web-class="boldtext"></label>
            <block type="jg_objects_create_new"/>
            <block type="jg_objects_set_key_to_value_in_object">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">key</field>
                    </shadow>
                </value>
                <value name="OBJECT">
                    <block type="variables_get">
                        <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                    </block>
                </value>
            </block>
            <block type="jg_object_getvalue">
                <value name="value">
                    <shadow type="text">
                        <field name="TEXT">key</field>
                    </shadow>
                </value>
                <value name="object">
                    <block type="variables_get">
                        <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                    </block>
                </value>
            </block>
            <label text="For something like getting the amount of keys in an object..." web-class="boldtext"></label>
            <block type="jg_objects_get_objects_key_names_in_list">
                <value name="OBJECT">
                    <block type="variables_get">
                        <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                    </block>
                </value>
            </block>
        </category>

        <category name="{{ TOOLBOX_OTHER }}" colour="#D14081"> 
        
            <block type="s4d_print">
                <value name="PRINT">
                    <block type="frost_other_err"/>
                </value>
            </block>
            <block type="s4d_clearconsole"/>
            <block type="s4d_run_save_output"></block>
            <block type="s4d_wait_seconds">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>
            <block type="blank_code">
                <field name="TEXT"/>
            </block>
            <block type="s4d_eval"></block>
            <block type="s4d_eval2"></block>
            <block type="s4d_exec"></block>
            <block type="s4d_try_and_catch">
                <value name="catch">
                    <block type="s4d_print">
                        <value name="PRINT">
                            <block type="frost_other_err"/>
                        </value>
                    </block>
                </value>
            </block>
            <block type="frost_other_err"/>
            <block type="s4d_return"></block>
            <block type="jg_s4d_other_run_code_inside_file"/>
	        <block type="is_a_number_or_string"></block>
            <block type="s4d_string_to_number"></block>
            <block type="frost_json_to_string"/>
            <block type="frost_current"/>
            <block type="unix_to_date"/>
            <block type="get_in_date"/>
            <block type="date_to_unix"/>
            <block type="create_qr_then"/>
            <block type="qr"/>
            <block type="anti_link"/>
        </category>
       
	  
<!--
            <category name="V2 Embeds" colour="#cc60db">
            
                <block type="lime_s4d_embed_create"/>
                <block type="s4d_message_embed_lime"/>
                <block type="s4d_embed_edit"/>
                <block type="lime_s4d_embed_send">
                    <value name="NAME">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                </block>
                <block type="embed_send_round">
                    <value name="Label">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                </block>
            </category>
        <category name="chatbot" colour="#ff0000">
        <block type="chat_ahq"/>
        </category>
        <category name="mod" colour="#ff0880">
        <block type="ahq-mod"/>
        </category>
        <category name="Voice" colour="#000099">
        <block type="voice_event"/>
        <block type="voice_switch"/>
        <block type="voice_leave"/>
        <label text="Properties" web-class="boldtext"></label>
        <block type="prop_voice"/>
        <label text="Methods" web-class="boldtext"></label>
        <block type="disconnect_voice"/>
        <block type="act_voice"/>
        </category>
        </category>
        -->

        <!--<category name="henpokpok" colour="#64C9FF">
          <category name="Timeout" colour="#FF6464">-->
          <!--</category>-->
        
        <!--  <category name="Reactions" colour="#FF6464">
        <label text="Reations event (under construction)" web-class="boldtext"></label>
        <block type="reaction_added"/>
        <block type="reaction_removed"/>
        <label text="React info" web-class="boldtext"></label>
        <block type="react_member"/>
        <block type="react_emoji"/>
        <block type="react_messageId"/>
        </category>
        </category>-->
	
	<!--<category name="AlexCdDg" colour="#06cfaa">-->
        
        <!--
        <category name="TTS" colour="#1010b5">
        <label text="Connect and use TTS" web-class="boldtext"></label>
        <block type="tts-test"/>
	<block type="tts_channel"/>
        </category>
        -->

        <!--
	<category name="Image Finder" colour="#00c7ad">-->
        <!--
        <block type="get_image"/>
	    <block type="url_image"/>
        -->
    <!--</category>-->
	<!--
	<category name="Other" colour="#c70e6d">
        
        <label text="ㅤ" web-class="boldtext"></label>
        <label text="ㅤ" web-class="boldtext"></label>
        
        
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="create_emoji"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="vc_kick"/>
       
	</category>
    -->
    <!--
	<category name="Channel" colour="#0c97f0">
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="category_channel"/>
        <block type="vcategory_channel"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="renamec"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="channel_perms"/>
        <block type="everyn"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="new_invite"/>
        <block type="invite_ur"/>
	</category>
    -->
 	<!--</category>-->

<!--<category name="frostzzone" colour="#347dfa">-->

<!-- <category name="Useless" colour="#2a46fa" hidden="true">
<block type="frost_image"/>LINE HIDDEN FROM SEARCH
<block type="frost_drop1"/>LINE HIDDEN FROM SEARCH
<block type="poll">LINE HIDDEN FROM SEARCH
<value name="title">
<shadow type="text">LINE HIDDEN FROM SEARCH
<field name="TEXT">Poll time</field>
</shadow></value>
<value name="message"><shadow type="text"><field name="TEXT">You like polls?</field></shadow></value><value name="color">
<block type="colour_picker"> LINE HIDDEN FROM SEARCH 
</block></value><value name="upvote"><shadow type="text"><field name="TEXT">👍</field></shadow></value><value name="downvote"><shadow type="text">LINE HIDDEN FROM SEARCH 
<field name="TEXT">👎</field></shadow></value>
</block>
</category>-->

<!--<category name="Messages" colour="#2a46fa">

<block type="frost_real_reply">
    <value name="CONTENT">
      <shadow type="text">
       <field name="TEXT">Hey!</field>
     </shadow>
    </value>
    <value name="boolean">
        <shadow type="logic_boolean">
            <field name="BOOL">TRUE</field>
        </shadow>
    </value>
</block>
<block type="frost_real_reply_then">
    <value name="CONTENT">
        <shadow type="text">
            <field name="TEXT">Hey!</field>
        </shadow>
    </value>
    <value name="boolean">
        <shadow type="logic_boolean">
            <field name="BOOL">TRUE</field>
        </shadow>
    </value>
</block>
<block type="frost_real_reply_add_reaction">
    <value name="REACTION">
        <shadow type="text">
            <field name="TEXT">👍</field>
        </shadow>
    </value>
</block>
<block type="frost_real_reply_edit">
    <value name="CONTENT">
        <shadow type="text">
            <field name="TEXT">Hey!</field>
        </shadow>
    </value>
</block>
<block type="frost_real_reply_delete"/>
<block type="frost_typing"><value name="time"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="CONTENT"><shadow type="text"><field name="TEXT">Hey!</field></shadow></value></block>
<label text="For Jose Or Redo Embeds"></label>
<block type="frost_send_embed_rr"/>
<label text="ㅤ" web-class="boldtext"></label>
</category>-->



<!--<category name="Category/Channel" colour="#2f64fa" hidden="false">-->


<!--<label text="ㅤ" web-class="boldtext"></label>
</category>-->

<!--
<category name="Embed" colour="#40bf4a">
<label text="For Jose Or Redo Embeds"></label>
<block type="frost_send_embed_rr"/>
<label text="ㅤ" web-class="boldtext"></label>
</category>
-->






<!--
<category name="Other" colour="#5ba58b">
</category>
-->
<!--
<category name="Translate" hidden="true">
<block name="frost_translate"/>LINE HIDDEN FROM SEARCH
</category>
</category>-->

	            
					  
		
<!--
<category name="Ticketing System" colour="#5b80a5">
	<label text="You can also type local" web-class="boldtext"></label>
		<block type="ticket_connect"/>
		<label text="Do npm install tickets-discord in shell after running" web-class="boldtext"></label>
		<block type="archieve_ticket"/>
		<block type="close_ticket"/>
		<block type="ticket_setup"/>
		<block type="unarchieve_ticket"/>
    <label text="Slash version" web-class="boldtext"></label>
    <block type="slash_archieve_ticket"/>
		<block type="slash_close_ticket"/>
		<block type="slash_ticket_setup"/>
		<block type="slash_unarchieve_ticket"/>
<block type="slash_message_channel"/>
        </category>
-->

<!--<category name="JeremyGamer13" colour="#FFAA00">-->
<!--
<label text="Need help? Go to this master document:" web-class="boldtext"></label>
          <label text="shorturl.at/nCFV7" web-class="boldtext"></label>
<category name="Messaging" colour="210">
-->
            <!--
            <block type="jg_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <block type="jg_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <label text="Button row support:" web-class="boldtext"></label>
            <block type="jg_button_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <block type="jg_button_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <label text="For use in slash commands:" web-class="boldtext"></label>
            <block type="jg_slash_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>
            <block type="jg_slash_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>
            <label text="Slash button row support:" web-class="boldtext"></label>
            <block type="jg_slash_button_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>
            <block type="jg_slash_button_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>-->
            <!--</category>-->
            
            


<!--

            <category name="Graphs" colour="90">
            <block type="jg_saveGraph_file"/>
            <block type="jg_saveGraph_convert"/>
            </category>

-->

	   <!-- 
<category name="Public Experiments" colour="120">
    <block type="jg_experiments_xml2json">
        <value name="CONTENT">
            <shadow type="text">
            </shadow>
        </value>
        <value name="CONTENT2">
            <shadow type="text">
            </shadow>
        </value>
    </block>
</category>-->

        <!--</category>-->
        
        <sep class="bt"/>
        <category name="{{ TOOLBOX_BASE }}" colour="#F46580">
        
        <label text="%{BKY_MANDATORY_BLOCKS}" web-class="boldtext"></label>
            <block type="s4d_login">
                <value name="TOKEN">
                    <shadow type="text">
                        <field name="TEXT">Your bot token</field>
                    </shadow>
                </value>
            </block>
	    <label text="Repl"></label>
	    <block type="frost_webserver">
<value name="URL">
                    <shadow type="text">
                        <field name="TEXT">This site was created to keep bot on 25/8</field>
                    </shadow>
                </value>
</block>
	    <block type="frost_env">
<value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">token</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_BASE_BLOCKS}"></label>
            <block type="s4d_on_connected"></block>
            <label text="%{BKY_BOT_INFORMATIONS}"></label>
            <block type="jg_base_bot"/>
            <block type="s4d_bot_ping"></block>
            <block type="s4d_bot_server_count"></block>
            <block type="s4d_bot_startup_time"></block>
            <block type="s4d_get_bot"></block>
						<block type="s4d_bot_amount"/>
                        <block type="jg_s4duptime"/>
            <label text="%{BKY_BOT_ACTIONS}"></label>
            <block type="s4d_set_bot_game"></block>
            <block type="s4d_set_bot_stream_text"></block>
            <block type="s4d_bot_shutdown"></block>
	    <block type="setbot"/>
<label text="{@user} = user ping . {user_tag} = user tag" web-class="boldtext"></label>
            <block type="start_antispam"/>
            <label text="Some more advanced features" web-class="boldtext"></label>
            <block type="jg_when_ran"/>
            <block type="jg_rbs_isRunButton"/>
            <block type="ps_os_stats"/>
		    <block type="get_cpu_uptime"/>
			<block type="cpu"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="{{ TOOLBOX_E_MESSAGES }}" colour="#4C97FF">
            <!--
            <category name="Handling" colour="#4C97FF"/>
            <category name="Embeds" colour="#4c8eff">
                <category name="Constructor" colour="#4c8eff"/>
                <category name="Object" colour="#4c8eff"/>
            </category>
            <category name="Reactions" colour="#4c82ff"/>
            <category name="Webhooks" colour="#4c76ff"/>
            -->

            <label text="%{BKY_MESSAGE_RELATED_BLOCKS}" web-class="boldtext"></label>
			
            <label text="%{BKY_DETECT_MESSAGES}"></label>
            <block type="s4d_on_message"></block>
            <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"></block>

            <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"></label>
            <block type="Message"/>
            <block type="s4d_message_channel"></block>
            <block type="frost_message_category"></block>
            <block type="s4d_message_guild"></block>
            <!--
                <block type = 'lime_s4d_message_context'/>
            -->

            <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>

            <block type="s4d_message_content"></block>
            <block type="s4d_message_id"></block>
	        <block type="s4d_message_ts"></block>
            <block type="s4d_message_author"></block>
            <block type="s4d_message_member"/>
            <block type="s4d_mentioned_member"></block>
            <block type="s4d_mentioned_channel"></block>
            <block type="s4d_mentioned_role"></block>
            <!--
                <block type= 'lime_s4d_message_attributes_content_author_id_timestamp'/>
            -->
            <block type='lime_msg_author_attributes'/>

            <label text="Attributes of the message"></label>
            <block type="jg_message_mentioned_member_number_on_message">
                <value name="INDEX">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="MESSAGE">
                    <shadow type="Message"/>
                </value>
            </block>
            <block type="jg_message_amount_of_mentioned_members_on_message">
                <value name="MESSAGE">
                    <shadow type="Message"/>
                </value>
            </block>
            <block type="jg_message_user_replied_to_in_message">
                <value name="MSG">
                    <shadow type="Message"/>
                </value>
            </block>
            <block type="jg_messages_message_is_value">
                <value name="MSG">
                    <shadow type="Message"/>
                </value>
            </block>
            <!--
            <block type="ahq_embed_is"/>
            -->
            <block type="ahq_embed_info">
                <value name="member">
                    <shadow type="Message"/>
                </value>
            </block>
            <block type="jg_messages_message_webhook_id">
                <value name="MSG">
                    <shadow type="Message"/>
                </value>
            </block>

            <label text="Attributes of any message"></label>
            <block type="jg_messages_value_dropdown_content_of_message"/>

            <label text="Get attachments on the message" web-class="boldtext"></label>
                
                    <!--
                    <block type="att_size">
                        <value name="MESSAGE">
                            <shadow type="Message"/>
                        </value>
                    </block>
                    -->
                    <block type="jg_attachment_amount_of_attachments_on_message">
                        <value name="MESSAGE">
                            <shadow type="Message"/>
                        </value>
                    </block>
                    <block type="jg_attachment_get_attachment_number">
                        <value name="INDEX">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="MESSAGE">
                            <shadow type="Message"/>
                        </value>
                    </block>
                    <block type="jg_attachment_get_attachment_property">
                        <value name="ATTACH">       
                            <block type="jg_attachment_get_attachment_number">
                                <value name="INDEX">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                                <value name="MESSAGE">
                                    <shadow type="Message"/>
                                </value>
                            </block>
                        </value>
                    </block>
                    <!--
                    <block type="att_name"/>
                    <block type="att_type"/>
                    <block type="att_url"/>
                    -->
    

            <label text="Respond to a recieved message"></label>

            <block type="s4d_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
            </block>

            <block type="jg_messages_respond_with_and_with_allowed_list_of_pings_on_users_on_roles">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">No user ping here!</field>
                    </shadow>
                </value>
                <value name="USERS">
                    <block type="lists_create_with">
                        <mutation items="0"/>
                    </block>
                </value>
            </block>

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
            <block type="s4d_reply_id"/>
            <block type="rreply_message"/>

            <label text="Reply Blocks"/>
            <block type="frost_real_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
                <value name="boolean">
                    <shadow type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_jg_real_reply_to_message_with_mention">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
                <value name="boolean">
                    <shadow type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_real_reply_then">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
                <value name="boolean">
                    <shadow type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_jg_real_reply_to_message_with_mention_then">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
                <value name="boolean">
                    <shadow type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_real_reply_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_real_reply_edit">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_real_reply_delete"/>
            <label text="Files"></label>
            <block type="jg_messages_send_file_and_message_with_button_row_to_channel"/>

            <label text="%{BKY_FIND_MESSAGE}"></label>
            <block type="s4d_get_msg_then"></block>
            <block type="edit_msg_by_id"></block>

            <label text ="Message actions"/>
    
            <block type="jg_typingChannel">
                <value name="CHANNEL">
                    <block type="s4d_message_channel"/>
                </value>
            </block>
            <block type="jg_messages_edit_message_to_text">
                <value name="TEXT">
                    <shadow type="text"/>
                </value>
            </block>

            <block type="s4d_delete"></block>
            <block type="jg_messages_delete_message">
                <value name="MESSAGE">
                    <block type="Message"/>
                </value>
            </block>
            <block type="s4d_remove_all_reactions"/>
            <block type="s4d_remove_reactions"/>
            <block type="s4d_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_messages_react_to_message_with_reaction">
                <value name="MESSAGE">
                    <block type="Message"/>
                </value>
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

            <block type="lime_s4d_pin"/>
            <block type="s4d_message_embed"/>
            <block type="frost_create_field"/>
            <block type="frost_add_field"/>
            <block type="jg_messages_crosspost_message">
                <value name="MESSAGE">
                    <block type="Message"/>
                </value>
            </block>
            <block type="anti_spam"/>            
            
            <label text="Blocks for handling typing" web-class="boldtext"></label>

            <block type="typing_start"/>
            <block type="jg_typing_typing_attribute"/>
                
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="Threads" colour="#478ded">
        
            <label text="%{BKY_LABEL_THREAD_MESSAGE}"/>
            <block type="s4d_on_thread_message"/>
            <block type="s4d_send_thread"/>
            <label text="Thread message info"/>
            <block type="s4d_thread_message_content"/>
            <block type="s4d_thread_message_id"/>
            <block type="s4d_thread_message_author"/>
            <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"/>
            <block type="s4d_message_thread"/>
            <block type="s4d_server_thread"/>
            <label text="%{BKY_RELATED_TO_MESSAGE_STRINGS}"/>
            <block type="s4d_thread_message_author_raw"/>
            <block type="s4d_thread_raw"/>
            <block type="s4d_thread_guild_raw"/>
            <label text="%{BKY_MESSAGE_ACTIONS}"/>
            <block type="s4d_message_start_thread"/>
            <block type="s4d_start_thread"/>
            <block type="s4d_started_thread"/>
            <block type="s4d_thread_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
                <value name="MENTION">
                    <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </block>
                </value>
            </block>
            <block type="s4d_thread_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_thread_message_delete"/>
            <label text="%{BKY_LABEL_THREAD_ARCHIVE}"/>
            <block type="s4d_on_thread_archive"/>
            <block type="s4d_on_thread_unarchive"/>
            <block type="s4d_unarchived_thread"/>
            <label text="%{BKY_THREAD_CREATE_LABEL}"/>
            <block type="s4d_on_thread_create"/>
            <block type="s4d_created_thread_on"/>
            <label text="%{BKY_THREAD_DELETE_LABEL}"/>
            <block type="s4d_on_thread_delete"/>
            <block type="s4d_deleted_thread"/>
            <label text="%{BKY_THREAD_OTHER_LABEL}"/>
            <block type="s4d_thread_channel"/>
            <block type="s4d_thread_name"/>
            <block type="s4d_thread_server"/>
            <block type="s4d_thread_archive"/>
	        <block type="jg_monaco_threads_add_member_to_from_thread_with_reason"/>
        </category>
        <category name="Webhooks" colour="#475ded">
        
            <block type="s4d_create_webhook_then"></block>
            <block type="jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do"></block>
            <block type="s4d_edit_webhook"></block>
            <block type="jose_jg_as_created_webhook_send"></block>
            <block type="jose_jg_s4d_as_created_webhook_send_with_allowed_mentions_on_lists_user_ids_role_ids"></block>
            <block type="jose_jg_webhooks_as_created_webhook_send_with_name_profile_picture_url"/>
            <block type="jose_jg_delete_created_webhook_with_reason"/>
            <block type="s4d_webhook_id"></block>
            <block type="s4d_webhook_token"></block>
            <block type="s4d_get_webhook_then"></block>
            <block type="s4d_get_edit_webhook"></block>
            <block type="s4d_send_webhook"></block>
            <block type="gsa_jose_jg_webhooks_as_webhook_send_with_name_profile_picture_url"/>
            <block type="jose_jg_s4d_as_webhook_send_with_allowed_mentions_on_lists_user_ids_role_ids"></block>
            <block type="jose_jg_gained_delete_webhook_with_reason"/>
            <block type="jose_jg_webhooks_get_all_webhooks_in_channel_then"/>
            <block type="jose_jg_webhooks_amount_of_webhooks"/>
            <block type="jose_jg_webhooks_webhook_with_id_exists_in_channel"/>
            <block type="jose_jg_webhooks_get_webhook_with_id"/>
            <block type="jose_jg_webhooks_get_webhook_information"/>
            <block type="jose_jg_webhooks_delete_webhook_with_reason"/>
        </category>


        <category name="Joins" colour="#5AD05F">
        
            <label text="%{BKY_JOINS_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_JOINS}"></label>
            <block type="s4d_on_member_join"/>
            <label text="%{BKY_JOINING_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_joining_member"/>
            <block type="s4d_joining_guild"/>
            <label text=" "/>
            <label text="%{BKY_LEAVES_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_LEAVES}"></label>
            <block type="s4d_on_member_leave"/>
            <label text="%{BKY_LEAVING_MEMBER_INFORMATIONS}"></label>
            <block type="jg_joins_subleaves_leaving_member"/>
            <block type="s4d_leaving_guild"/>
        </category>
        <category name="Reactions" colour="#89674A">
        
            <label text="%{BKY_REACT_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_REACT}"></label>
            <block type="s4d_on_react_added"></block>
            <block type="s4d_on_react_removed"></block>
            <label text="%{BKY_REACT_INFORMATIONS}"></label>
            <block type="s4d_react_message"/>
            <block type="s4d_react_message_id"></block>
            <block type="s4d_react_emoji"></block>
            <block type="s4d_react_member"></block> 
            <block type="s4d_react_count"></block>
            <block type="s4d_remove_all_reactions"/>
            <block type="s4d_remove_reactions"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="More Events" colour="#EABB11">
        <category name="Server" colour="#52fc03">
        <block type="on_server_update"/>
        <block type="server_update_vars"/>
        </category>
            <category name="Edited" colour="#e85a66">
            
                <label text="Event" web-class="boldtext"></label>
                <block type="when_message_is_edited"/>
                <label text="Event attributes" web-class="boldtext"></label>
                <block type="jg_edited_old_new_message"/>
                <block type="jg_messages_value_dropdown_content_of_message"/>
                <block type="redo_maybe_idk_jg_newmsg_edit_date_timestamp_of_message_edit"/>
                <label text=""></label>
                <block type="newmsg_channel"/>
                <block type="new_message_server"/>
                <block type="redo_maybe_idk_jg_newmsg_edit_original_new_message_content"/>
                <block type="s4d_reply">
                    <value name="CONTENT">
                        <shadow type="text">
                            <field name="TEXT">Hey!</field>
                        </shadow>
                    </value>
                </block>
                <block type="jg_messages_delete_message">
                    <value name="MESSAGE">
                        <block type="Message"/>
                    </value>
                </block>
            </category>
            <category name="Deleted" colour="#a14c22">
            
                <label text="%{BKY_DELETED_RELATED_BLOCKS}" web-class="boldtext"></label>
                <label text="%{BKY_DELETED_EVENT}"></label>
                <block type="s4d_on_deleted"></block>
                <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>
                <block type="Message"/>
                <block type="s4d_message_content_deleted"></block>
                <block type="s4d_message_server_deleted"></block>
                <block type="s4d_message_channel_deleted"></block>
                <block type="s4d_message_author_deleted"></block>
            </category>
            <category name="Channels" colour="#AF28B7">
            
                <block type="on_channelCreate"></block>
                <block type="cc_name"></block>
                <block type="cc_channel"></block>
                <block type="on_channelUpdate"></block>
                <block type="cu_name"></block>
                <block type="cu_channel"></block>
                <block type="on_channelDelete"></block>
                <block type="cd_name"></block>
                <block type="cd_channel"></block>
                <block type="on_channelTopicChange"/>
                <block type="s4d_channel_raw"/>
                <block type="topic"/>
                <!--
                <block type="on_channelPermissionsChange"/>
                <block type="s4d_channel_raw"/>
                <block type="permissions"/>
                -->
            </category>
            <category name="Scheduled events" colour="#AF88E2">
            
                <block type="lime_guild_sheduled_events_create"></block>
                <block type="lime_guild_sheduled_events_remove"></block>
                <block type="lime_scheduled_event_attributes"></block>
            </category>
            <category name="Emojis" colour="#147AC3">
            
                <block type="on_emojicreate"></block>
                <block type="ec_name"></block>
                <block type="on_emojiupdate"></block>
                <block type="eu_name"></block>
                <block type="on_emojidelete"></block>
                <block type="ed_name"></block>
            </category>
            <category name="Roles" colour="#14C36B">
            
                <block type="on_rolecreate"></block>
                <block type="rc_name"></block>
                <block type="on_roleupdate"></block>
                <block type="ru_name"></block>
                <block type="on_roledelete"></block>
                <block type="rd_name"></block>
            </category>
            <category name="Stickers" colour="#00b3ff">
            
                <block type="on_stickercreate"></block>
                <block type="sc_name"></block>
                <block type="on_stickerdelete"></block>
                <block type="sd_name"></block>
                <block type="on_stickerupdate"></block>
                <block type="su_name"></block>
            </category>
            <category name="Member Roles" colour="#39A9E3">
            
                <block type="on_roleadd"/>
                <block type="on_roleremove"/>
                <block type="event-role"/>
                <block type="member_raw"/>
                <block type="member"/>
                <!--
                <block type="on_roleremove"/>
                <block type="event-role"/>
                <block type="member_raw"/>
                <block type="member"/>
                -->
            </category>
            <category name="Bot Added" colour="#a17722">
            
                <label text="Blocks for detecting when the bot is added or removed" web-class="boldtext"></label>
                <block type="s4d_on_added"></block>
                <block type="s4d_on_remove"></block>
                <label text="Server information"></label>
                <block type="s4d_add_server_id"></block> 
                <block type="s4d_add_server_name"></block>
                <block type="s4d_add_server_icon"></block>
                <block type="s4d_add_server_owner"/>
            </category>
            <category name="Boosts" colour="#E545B1">
            
                <block type="on_boost"/>
                <block type="on_unboost"/>
                <block type="member_raw"/>
                <block type="member"/>
                <label text="ㅤ" web-class="boldtext"></label>
                <block type="on_up"/>
                <block type="on_down"/>
                <block type="event-guild"/>
                <block type="boost"/>
                <label text="ㅤ" web-class="boldtext"></label>
            </category>
            <category name="Server Customizations" colour="#E71F72">
            
                <block type="on_banner_add"/>
                <block type="on_vanity_add"/>
                <block type="on_vanity_remove"/>
                <block type="on_vanity_update"/>
                <block type="event-guild"/>
                <block type="banner-url"/>
                <block type="vanity-url"/>
                <block type="url-update"/>
                <label text="ㅤ" web-class="boldtext"></label>
            </category>
            <category name="Custom Events" colour="#F5AB1A">
            
                <block type="create_event">
                    <value name="NAME">
                        <shadow type="text">
                            <field name="TEXT">message1</field>
                        </shadow>
                    </value>
                </block>
                <block type="emit_event">
                    <value name="NAME">
                        <shadow type="text">
                            <field name="TEXT">message1</field>
                        </shadow>
                    </value>
                </block>
            </category>
        </category>
        <sep class="bt"/>
        <category name="Embeds" colour="#fcca03">
            <!--
            <label text="Want to create an embed quickly?" web-class="boldtext"></label>
            <label text="Try the new Embed Creator Menu!" web-class="boldtext"></label>
            <button text="Simple Embed Creator" callbackKey="EMBED_GUI_POPUP"></button>
            <label text="(Beta, 1.0)" web-class="boldtext"></label>
            <label text=""></label>
            <label text="Send a generated embed" web-class="boldtext"></label>
            <block type="s4d_embed_send"></block>
            -->
            <!--
            <category name="no name: MrRedo" colour="#fca903">
            
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
                <block type="send_m_embed_string"/>
                <block type="s4d_m_create_embed_then_send"></block>
                <block type="frost_send_embed_rr"/>
            </category>
            -->
            <!--
            <category name="no name: Jose" colour="#fc9803">
            
                <label text="Create A Perfect Embed" web-class="boldtext"></label>
                <block type="s4d_create_embed_then"></block>
                <label text="%{BKY_COLOR_MESSAGE}"></label>
                <block type="s4d_create_embed_then_set_color"></block>
                <block type="s4d_create_embed_then_set_author"></block>
                <block type="s4d_create_embed_then_set_title"></block>
                <block type="s4d_create_embed_then_add_link"></block>            
                <block type="s4d_create_embed_then_set_thumbnail"></block>
                <label text="%{BKY_HYPERLINK_MESSAGE}"></label>
                <label text="%{BKY_HYPERLINK_MESSAGE_2}"></label>
                <block type="s4d_create_embed_then_set_description"></block>
                <block type="s4d_create_embed_then_add_field"></block>
                <block type="s4d_create_embed_then_set_image"></block>
                <block type="s4d_create_embed_then_set_footer"></block> 
                <label text="%{BKY_SEND_EMBED}"></label>
                <block type="s4d_create_embed_then_send"></block>
                <block type="frost_send_embed_rr"/>
            </category>
            -->
            <category name="Non-Nameable" colour="#fc8c03">
            
                <label text="Create a perfect embed" web-class="boldtext"></label>
                <block type="s4d_embed_create"></block>
                <block type="s4d_embed_set_color"></block>
                <block type="s4d_embed_set_author"></block>
                <block type="s4d_embed_set_title"></block>
                <block type="s4d_embed_set_desc"></block>
                <block type="s4d_embed_set_thumb"></block>
                <block type="s4d_embed_add_field"></block>
                <block type="s4d_embed_set_image"></block>
                <block type="s4d_embed_set_footer"></block>
                <label text="Custom date format: MM-DD-YYYY" web-class="boldtext"></label>
                <block type="s4d_embed_set_timestamp"></block>
                <label text="Send a perfect embed (use with reply bl)" web-class="boldtext"></label>
                <block type="s4d_embed_send"></block>
            </category>
            <!--
            <category name="named: AHQ" colour="#fc8403">
            
                <block type="make_ahq_embed"/>
                <label text="Embed Send" web-class="boldtext"></label>
                <block type="send_ahq_embed"/>
                <label text="Embed Creator" web-class="boldtext"></label>
                <block type="title_ahq_embed"/>
                <block type="url_ahq_embed"/>
                <block type="author_ahq_embed"/>
                <block type="color_ahq_embed"/>
                <block type="des_ahq_embed"/>
                <block type="fld_ahq_embed"/>
                <block type="image_ahq_embed"/>
                <block type="thmb_ahq_embed"/>
                <block type="footer_ahq_embed"/>
                <block type="stamp_ahq_embed"/>
            </category>
            -->
            <category name="Nameable" colour="#fc7703">
                
                <block type="gsa_create_embed"/>
                <label text="note that you CANNOT put ANYTHING other then these blocks in the create embed block" web-class="boldtext"></label>
                <block type="gsa_set_embed_color"/>

                <block type="gsa_set_embed_title"/>

                <block type="gsa_set_embed_author"/>

                <block type="gsa_set_embed_description"/>

                <block type="gsa_set_embed_thumbnail"/>

                <block type="gsa_create_fields"/>

                <block type="gsa_add_blank_field"/>

                <block type="gsa_add_field"/>

                <block type="gsa_set_embed_image"/>
                <label text="leave the date blank for current date" web-class="boldtext"></label>
                <block type="gsa_set_embed_timestamp"/>

                <block type="gsa_set_embed_footer"/>

                <block type="gsa_send_embed"/>

                <label text="Simple Embeds! If you want to keep it all simple, use these embeds."></label>
                <label text="But we prefer using the other ones as they may not always work."></label> 
                <label text="THESE BLOCKS DO NOT WORK WITH OTHER EMBED SETS!" web-class="boldtext"></label>
                <block type="gsa_simple_embed"/>
                <block type="gsa_simple_field"/>
            </category>
        </category>
        <category name="Interactions" colour="#c847ff">
        <category name="Slash" colour="#c847ff">
        
            <label text='⚠️ Deletes commands set by "Slash Command GUI"! ⚠️'></label>
            <label text='Only one "Create slash commands" block should be placed.'></label>
            <label text='Otherwise, it will break!'></label>

            <label text="You also need to invite your bot with applications.commands enabled!" web-class="boldtext"></label>

            <block type="frost_slash_register"/>
            <block type="frost_slash_command">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="frost_slash_sub_command_group">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="frost_slash_sub_command">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="frost_slash_options1">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="REQUIRED">
                    <shadow type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_slash_options2">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="REQUIRED">
                    <shadow type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                    </shadow>
                </value>
            </block>
            <block type="frost_slash_choices">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="OPTION_NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <label text="Handling slash commands:"></label>
            <block type="on_slash"></block>
            <block type="interaction_name"></block>
            <block type="interaction_author"></block>
            <block type="interaction_channel"></block>
            <block type="interaction_guild"></block>
            <block type="interaction_voice_channel"></block>
            <block type="interaction_voice_channel_id"></block>
            <block type="bot_voice_channel_id"></block>
            <block type="options">
                <mutation mode="string"/>
            </block>
            <block type="fz_attachment_info"/>
            <block type="fz_attachment_info2"/>
            <block type="slash_reply"></block>
            <block type="slash_edit"></block>
            <block type="jg_messages_files_send_reply_with_file_and_message_with_button_row_as_hidden"/>
            <label text="Send an embed in slash"></label>
            <label text="(for named embeds, the name has to be just called embed)"></label>
            <block type="send_m_embed_string"></block>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        
            <category name="Buttons" colour="#c847ff">
            
                <category name="AHQ" colour="#c847ff">
                
                    <label text="Buttons" web-class="boldtext"></label>
                    <label text="Event" web-class="boldtext"></label>
                    <block type="on_real_button"/>
                    <label text="Button Information" web-class="boldtext"></label>
                    <block type="id_btn_srv"/>
                    <block type="id_btn_ch"/>
                    <block type="id_btn_clkr"/>
                    <block type="id_btn_ahq"/>
                    <label text="Embed Information" web-class="boldtext"></label>
                    <block type="embed_btn_ahq"/>
                    <block type="embed_send_round">
                        <value name="Label">
                            <shadow type="text">
                                <field name="TEXT"></field>
                            </shadow>
                        </value>
                    </block>
                    <label text="Button Actions" web-class="boldtext"></label>
                    <block type="updte_ahq_button"/>
                    <block type="rply_ahq_button"/>
                    <label text="Send button" web-class="boldtext"></label>
                    <block type="snd_ahq_button"/>
                    <label text="Button Creation Stuff" web-class="boldtext"></label>
                    <block type="make_ahq_button"/>
                    <block type="style_ahq_button"/>
                    <block type="label_ahq_button"/>
                    <block type="emoji_ahq_button"/>
                    <block type="url_ahq_button"/>
                    <block type="d_ahq_button"/>
                    <label text="⠀" web-class="boldtext"></label>
                </category>
                <category name="Jose" colour="#c847ff">
                
                    <label text="%{BKY_BUTTON_EVENT}"></label>
                    <block type="s4d_on_click"></block>
                    <label text="%{BKY_BUTTON_EVENT_BLOCKS}"></label>
                    <block type="s4d_button_click_id"></block>
                    <block type="jose_jg_buttons_s4d_button_message"></block>
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
                <category name="MrRedo" colour="#c847ff">
                
                    <label text="Buttons" web-class="boldtext"></label>
                    <label text="%{BKY_T_EDI}"></label>
                    <block type="on_button"></block>
                    <label text="%{BKY_T_BS}"></label>
                    <block type="button_id"></block>
                    <block type="button_author"></block>
                    <block type="button_channel"></block>
                    <block type="button_guild"></block>
                    <block type="b_style"></block>
                    <label text="Reply and edit and send embed"></label>
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
            </category>
            <category name="Menus" colour="#c847ff">
            
                <label text="%{BKY_BUTTON_EVENT}"></label>
                <block type="s4d_on_menu_click"></block>
                <label text="%{BKY_BUTTON_EVENT_BLOCKS}"></label>
                <block type="s4d_menu_value"></block>
                <block type="s4d_menu_click_id"></block>
                <block type="s4d_menu_reply"></block>
                <block type="s4d_button_think"></block>
                <block type="s4d_button_edit"></block>
                <block type="s4d_button_delete_reply"></block>
	            <block type="s4d_send_button"></block>
                <block type="s4d_update"></block>
                <label text="%{BKY_BUTTON_BLOCKS}"></label>
                <block type="s4d_button_menu"></block>
                <block type="s4d_message_menu_block"></block>
            </category>
            <category name="Context Menus" colour="#c847ff">
            
                <label text="Context menus" web-class="boldtext"></label>
                <label text="Register context menu" web-class="boldtext"></label>
                <block type="register_c_m"></block>
	            <block type="register_c_m_g"></block>
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
            <category name="Forms" colour="#c847ff">
                <category name="ahq Forms" colour="#c847ff">
                    
                    <label text="Forms" web-class="boldtext"></label>
                    <block type="on_real_form"/>
                    <block type="embed_send_round">
                        <value name="Label">
                            <shadow type="text">
                                <field name="TEXT"></field>
                            </shadow>
                        </value>
                    </block>
                    <block type="ahq_ahq_ahq_modal"/>
                    <block type="ahqq_ahq_modal"/>
                    <label text="Form Info" web-class="boldtext"></label>
                    <block type="id_form_ahq"/>
                    <block type="id_textbox_ahq"/>
                    <block type="clkr_form_ahq"/>
                    <block type="channel_form_ahq"/>
                    <block type="server_form_ahq"/>
                    <block type="reply_ahq_modal_text"/>
                    <block type="something_modal"/>
                    <label text="Make Forms" web-class="boldtext"></label>
                    <block type="make_ahq_modal"/>
                    <block type="make_ahq_modal_text"/>
                    <block type="style_ahq_modal"/>
                    <label text="Send Forms" web-class="boldtext"></label>
                    <block type="snd_ahq_modal"/>
                    <label text="⠀" web-class="boldtext"></label>
                </category>
                <category name="redman13 Forms" colour="#c847ff">
                    <label text="use ahq's form blocks for recieve" web-class="boldtext"></label>
                    <block type="gsa_modal_create"/>
                    <block type="gsa_modal_text"/>
                    <block type="gsa_modal_send"/>
                </category>
            </category>
        </category>
        <category name="Utilities" colour="#03b6fc">
        
            <category name="Server Backups" colour="#03a1fc">
            
                <block type="s4d_create_backup_of_guild_then"/>
                <block type="s4d_backup_load"/>
                <block type="s4d_delete_backup"/>
                <block type="s4d_backup_id"/>
            </category>
            <category name="Giveaways" colour="#0390fc">
            
                <block type="s4d_create_giveaway"/> 
                <block type="s4d_giveaway_id"/>
                <block type="s4d_dd_giveaway"/>
                <block type="s4d_giveaway_data"/>
            </category>
        </category>
        <category name="Music" colour="#52fc03">
        
            <category name="Music Lyrics" colour="#4be802">
            
                <label text="Find lyrics for music" web-class="boldtext"></label>
	 	        <block type="find_lyric_than"/>
		        <block type="lyric"/>
            </category>
            <category name="Music Player" colour="#43d400">
            
			    <label text="Create a perfect music player" web-class="boldtext"></label>
                <label text="Made with discord-music-player DMP" web-class="boldtext"></label>
                <label text="WARNING DON'T USE WITH JOSE MUSIC BLOCKS" web-class="boldtext"></label>
	            <label text="Events :D" web-class="boldtext"></label>
                <block type="first_track"/>
                <block type="track_start"/>
                <block type="empty"/>
                <block type="kicked"/>
                <block type="queue_error"/>
                <block type="track_added"/>
                <label text="Blocks :D" web-class="boldtext"></label>
                <block type="discord_connect"/>
                <block type="better_stop"/>
                <block type="better_play"/>
                <block type="better_pause"/>
                <block type="better_resume"/>
                <block type="better_shuffle"/>
                <block type="better_skip"/>
                <block type="better_loop_song"/>
                <block type="better_loop_queue"/>
                <block type="loop_stop"/>
	            <block type="better_volume"/>
                <label text="Queue info :D" web-class="boldtext"></label>
                <block type="better_song_thumbnail"/>
                <block type="new_track_name"/>
                <block type="added_song_name"/>
                <block type="better_track_url"/>
                <block type="retro_track_channel"/>
                <block type="better_duration"/>
	            <block type="better_voice_channel"/>
	            <block type="better_vcid"/>
                <block type="better_botvcid"/>
	            <block type="song-first"/>
            </category>
            <category name="Discord Player" colour="#3dbf00">
            
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
        <sep class="bt"/>
        <category name="{{ TOOLBOX_SERVER }}" colour="#D85E47">
        
            <label text="%{BKY_FIND_SERVER}"></label>

            <block type="s4d_get_server"></block>
            <block type="s4d_get_all_server"></block>
            <block type="s4d_get_all_server_server"></block>

            <label text="%{BKY_LABEL_SERVER_INFOS}"></label>

	        <block type="server_attributes"/>
            <!--
	            <block type="set_server_something">
                   <value name="reason">
                       <shadow type ="text">
                           <field name="TEXT"> </field>
                        </shadow>
                   </value>
                </block>
            -->
            <block type="s4d_server_name"></block>
            <block type="s4d_member_count"></block>
            <block type="s4d_icon_url"></block>
            <block type="s4d_server_id"></block>
            <block type="s4d_boost_level"></block>
            <block type="s4d_server_owner"></block>
            <block type="s4d_server_created_at"></block>
            <block type="s4d_number_of__server"></block>
            <!--
                <block type="jg_monaco_servers_amount_of_channels_in_server"/>
            -->

            <label text="Bot server actions"></label>

            <block type="s4d_leave_server"></block>

            <label text="%{BKY_LABEL_MODIFY_SERVER}"></label>

            <block type="s4d_set_server_name"></block>
	        <block type="set_server_something">
                <value name="reason">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
	        <block type="explicit_content_filter"/>
            <block type="default_notif_lvl"/>
            <block type="set_verification_level"/>

            <label text="Server audit logs"></label>

            <block type="jg_monaco_servers_on_server_get_audit_logs_then"/>
            <block type="jg_monaco_servers_amount_of_audit_logs"/>
            <block type="jg_monaco_servers_audit_log_number">
                <value name="NUMBER">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_monaco_servers_log_has_reason"/>
            <block type="jg_monaco_servers_get_property_from_log"/>
            <block type="jg_monaco_servers_amount_of_changes_in_log_changes"/>
            <block type="jg_monaco_servers_change_number_in_changes">
                <value name="INDEX">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_monaco_servers_get_from_change"/>
            <label text="Create Servers"></label>
            <block type="monaco_create_server"></block>
            <block type="monaco_created_guild"/>
            <label text="Delete a server (only if the bot is the owner)"></label>
            <block type="monaco_delete_guild"/>

            <label text="ㅤ" web-class="boldtext"></label>
                
        </category>
        <category name="Channels" colour="#a55b80">
        
            <label text="Find a channel"></label>

            <block type="s4d_get_channel"></block>
            <block type="jg_monaco_channels_get_channel_number_from_server">
                <value name="INDEX">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_get_all_channel"></block>
            <block type="s4d_get_all_channel_channel"></block>
	        <block type="get_all_channel_channel_name"></block>
            <block type="jg_alex_channels_first_channel_in_server"/>
            <block type="frost_category_get"/>

            <label text="Send a message in the found channel"></label>

            <block type="s4d_send_channel"></block>
            <block type="jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">No user ping here!</field>
                    </shadow>
                </value>
                <value name="USERS">
                    <block type="lists_create_with">
                        <mutation items="0"/>
                    </block>
                </value>
            </block>

	        <label text="Channel Info"></label>

            <block type="frost_channel_types">
                <value name="Channel">
                    <shadow type="s4d_message_channel"/>
                </value>
            </block>
	        <block type="s4d_channel_ahq_name"></block>
            <block type="s4d_channel_id"/>
            <block type="monaco_position_of_channel"/>
            <block type="s4d_channel_guild_id"/>
            <block type="s4d_channel_parent_id"/>
            <block type="s4d_channel_message_id"/>
            <block type="s4d_channel_topic"/>
            <block type="s4d_channel_exist"/>
            <block type="s4d_is_channel_nsfw"/>
            <!--
            <block type="isdm"/>
            -->
            <block type="frost_category_id"/>

            <label text="Finding content in the channel"></label>

            <block type="jg_channel_get_last_messages_in_channel_then">
                <value name="AMOUNT">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_channel_last_message_number">
                <value name="INDEX">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>

            <label text="Forms"></label>

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
            <block type="reply_mentioned_member"/>
            <block type="reply_mentioned_role"/>
            <block type="reply_mentioned_channel"/>
            <block type="reply_message"/>
            <block type="reply_message_id"/>
			<block type="jg_channels_wait_for_message_in_channel_to_meet_check_for_minutes_then_if_no_messages_pass">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>

            <label text="Actions on messages in the channel"></label>

             <block type="s4d_purge">
                <value name="AMOUNT">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value> 
            </block>
	    
            <label text="Channel Actions"></label>

            <block type="s4d_create_channel"></block>
            <block type="create_category_then"/>
            <block type="fz_channel"/>
            <block type="frost_created_cat"/>
            <block type="s4d_delete_channel"></block>
            <block type="monaco_set_channel_position"/>

            <label text="Actions for the channel"></label>

            <block type="monaco_set_channel_nsfw"/>
            <block type="monaco_toggle_follow_channel"/>
            <block type="renamec"/>
            <block type="channel_perms"/>
            <block type="set_perms_parent"/>
            <!--
                <block type="slowmode"/>
            -->
            <block type="frost_slowmode">
                <value name="CHANNEL">
                    <shadow type="s4d_message_channel"/>
                </value>
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
                <value name="REASON">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
            </block>

            <label text="Voice channel events"></label>

            <block type="voice_event"/>
            <block type="voice_switch"/>
            <block type="voice_leave"/>

            <label text="Voice channel Information"></label>

            <block type="prop_voice"/>
            <block type="jg_members_member_is_in_voice_channel">
                <value name="MEMBER">
                    <shadow type="s4d_message_member"/>
                </value>
            </block>
            <block type="jg_members_get_members_current_voice_channel">
                <value name="MEMBER">
                    <shadow type="s4d_message_member"/>
                </value>
            </block>

            <label text="Voice channel actions"></label>

            <block type="jg_voice_create_connection_to_voice_channel_id_in_server_id">
                <value name="SERVER">
                    <shadow type="text"/>
                </value>
                <value name="CHANNEL">
                    <shadow type="text"/>
                </value>
            </block>
            <block type="jg_voice_play_audio_file_at_percent_volume_on_connection">
                <value name="FILE">
                    <shadow type="text"/>
                </value>
                <value name="VOLUME">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="CONNECTION">
                    <block type="variables_get">
                        <field name="VAR" id="MjBNeg3T-ID1JeaMVk9F">connection</field>
                    </block>
                </value>
            </block>
            <block type="jg_voice_disconnect_from_voice_connection">
                <value name="CONNECTION">
                    <block type="variables_get">
                        <field name="VAR" id="MjBNeg3T-ID1JeaMVk9F">connection</field>
                    </block>
                </value>
            </block>
            <block type="disconnect_voice">
                <value name="r">
                    <shadow type="text"/>
                </value>
            </block>
            <block type="act_voice">
                <value name="r">
                    <shadow type="logic_boolean"/>
                </value>
            </block>

            <label text="Discord Voice Activites (aka, Discord Together!)"></label>
            <block type="create_together"/>
            <block type="invite_code"/>
		    <block type="vc_channel"/>

            <label text="Create a new perfect event!"/>
            <label text="⚠ ISO 8601 is needed for the dates! You can find it at : unixtimestamp.com"/>

                <block type="create_new_event">
                    <value name="event_id">
                        <block type="text"/>
                    </value>
                </block>
		        <block type="edit_s_event">
                    <value name="event_id">
                        <block type="text"/>
                    </value>
                </block>
                <block type="event_set_options"/>

                <label text="Event options"/>

                <block type="privacylevel"/>
                <block type="entitytype"/>

                <label text="Delete perfect event..."/>

                <block type="delete_sch_event">
                    <value name="amongus">
                        <shadow type="text"/>
                    </value>
                </block>

            <label text="Temporary Channels"/>
                <block type="s4d_temp_register"/>
                <block type="temp_member_name"/>
                <block type="s4d_temp_unregister"/>

            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="Roles" colour="#2EB66B">
        
            <label text="%{BKY_FIND_ROLE}"></label>
            <block type="s4d_get_role"></block>
            <block type="s4d_get_all_role"></block>
            <block type="s4d_get_all_role_role"></block>
            <block type="jg_roles_get_all_member_roles_then_for_each_do"/>
            <block type="jg_roles_get_all_member_roles_then_for_each_do_role"/>
            <block type="hig_role"/>
            <!--
            <block type="monaco_members_with_role"/>
            -->
            <!--
            <block type="monaco_random_role"/>
            -->
            <label text="%{BKY_ROLE_ASSIGNMENT}"></label>
            <block type="fz_role_info_text"/>
            <block type="fz_role_info_num"/>
            <block type="monaco_get_role_on_position"/>
			<block type="fz_role_info_bool"/>
            <block type="fz_role_info_color"/>
            <block type="s4d_add_role"><value name="MEMBER"><shadow type="s4d_message_member"/></value></block>
            <block type="s4d_remove_role"><value name="MEMBER"><shadow type="s4d_message_member"/></value></block>
            <block type="s4d_delete_role"></block>
            <block type="monaco_delete_role"></block>
            <block type="monaco_set_role_position"></block>
            <block type="s4d_has_role"></block>
			<block type="s4d_role_exist"/>
            <block type="s4d_create_role"></block>
			<block type="gsa_jg_create_role_with_name_in_server_with_color_then_do"/>
			<block type="gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role"/>
            <block type="s4d_set_role_perm"></block>
            <block type="role_color"/>
            <block type="role_name"/>
	        <block type="jg_monaco_roles_hoist_role"/>
	        <block type="jg_monaco_roles_change_role_to_be_mentionable_with_reason"/>
	        <block type="set_role_icon"/>
            <label text="Caching roles"></label>
			<block type="jg_roles_fetch_all_roles_in_server_then_do"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category> 
        <category name="{{ TOOLBOX_MEMBERS }}" colour="#187795">
        
            <label text="%{BKY_FIND_MEMBER}"></label>
            <block type="s4d_get_member"></block>
            <block type="jg_members_get_member_by_id">
                <value name="ID">
                    <shadow type="text">
                        <field name="TEXT">12345</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_get_all"></block>
            <block type="s4d_get_all_member"></block>
            <block type="ahq_members_get_random_member_in_server"/>
            <label text="%{BKY_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_member_exist"/>
            <block type="s4d_member_id"></block>
            <block type="s4d_member_discriminator"></block>
            <block type="s4d_member_tag"></block>
            <block type="ahq_presence"/>
            <block type="s4d_member_username"></block>
            <block type="jg_members_member_has_nickname"/>
            <block type="jg_members_member_s_nickname"></block>
            <block type="s4d_member_icon"></block>
            <block type="s4d_member_dynamic_icon"></block>
            <block type="s4d_joined_at"></block>
            <block type="s4d_created_at"></block>
            <block type="s4d_member_is_bot"/>
            <label text="Information about a Server Member (6 options)"></label>
            <block type="jg_members_member_is_value"/>
            <label text="Blocks for users"></label>
            <!--
            <block type="jg_members_user_accent_color"/>
            -->
            <block type="jg_member_is_user_in_server"/>
            <block type="jg_members_user_exactly_equals_user"/>
            <label text="Information about a User (20 options)"></label>
            <block type="jg_members_user_has_value"/>
            <label text="fetch members banner" web-class="boldtext"></label>
            <block type="s4d_get_user_banner"/>
            <block type="s4d_member_banner"/>
            <label text="Server info about a member"></label>
            <block type="s4d_member_has_permission"/>
	        <block type="member_channel_perms"/>
            <block type="jg_status_does_member_have_a_status_for_device">
                <value name="MEMBER">
                    <shadow type="s4d_message_member"/>
                </value>
            </block>
            <block type="jg_status_member_status_on_discord">
                <value name="MEMBER">
                    <shadow type="s4d_message_member"/>
                </value>
            </block>
            <label text="This will detect the color of highest role" web-class="boldtext"></label>
            <block type="member_color"/>
            <label text="Bot information on members or users"></label>
            <block type="jg_members_new_list_of_known_ids"/>

            <label text="%{BKY_LABEL_MEMBER_ACTIONS}"></label>
            <block type="mute_ahq"/>
            <block type="jg_monaco_members_remove_timeout_from_member"/>
            <block type="s4d_kick_member"></block>
            <block type="s4d_ban_member"></block>
            <block type="s4d_unban_member"></block>
            <block type="monaco_expanded_punishments"></block>
            <block type="s4d_send_member"></block>
            <block type="s4d_set_member_nickname"></block>
            <label text="Member action events"></label>
            <block type="banned_event"/>
            <block type="banned_objects"/>
            <block type="unbanned_event"/>
            <block type="unbanned_objects"/>
            <block type="lime_kick_event"/>
            <block type="lime_kicked_member_info_attributes"/>
            <label text="%{BKY_FORMS}"></label>
            <block type="s4d_send_wait_reply_dm"></block>
            <block type="s4d_send_wait_reply_dm_value"></block>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="Emojis" colour="#347dfa" hidden="false">
        
            <label text="Welcome to emojis"></label>
            <block type="fz_get_emoji"/>
            <block type="fz_create_emoji"/>
            <block type="fz_delete_emoji"/>
            <block type="fz_emoji_info"/>
            <block type="fz_emoji_animated"/>
            <block type="fz_emoji_exist"/>
            <block type="fz_get_all_emoji"/>
            <block type="fz_get_all_emoj"/>
            <block type="fz_unlock_emoji"/>
            <block type="fz_lock_emoji"/>
            <label text="Detect Emojis in text" web-class="boldtext"></label>
            <block type="jg_emoji_text_regex_list_of_normal_emojis_in_text"/>
            <block type="jg_emoji_text_regex_list_of_custom_emojis_in_text"/>
            <block type="jg_emoji_text_regex_list_of_animated_emojis_in_text"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="Invites" colour="#5abced">
        
             <label text="Create Invites"></label>
                <block type="new_invite"/>
                <block type="invite_ur"/>
            <label text="Fetch Invites"></label>
                <block type="monaco_all_invites"/>
                <block type="monaco_invites_channels"/>
                <block type="monaco_invite_with_code"/>
            <label text="Delete Invites"></label>
                <block type="monaco_delete_invite"/>
            <label text="Invite Events"></label>
            <label text="On member joined"></label>
                <block type="userinvited"/>
                <block type="Member"/>
                <block type="InviteMember"/>
                <block type="Server"/>
                <block type="Amount"/>
            <label text="On member leaved"></label>
                <block type="UserLeave"/>
                <block type="Member"/>
                <block type="InviteMember"/>
                <block type="Server"/>
                <block type="Amount"/>
            <label text="Extras"></label>
                <block type="get_member_invites"/>
        </category>
        <sep class="bt"/>
    <category name="Web Requests" colour="#4C97FF">
        <category name="Simple" colour="#4c8bff">
	    <label text="Want to do cool things with json requests? Check out PooPoo API" web-class="boldtext"></label>
	    <label text="https://poopoo-api.vercel.app/" web-class="boldtext"></label>
            <block type="s4d_http_get_then"/>
            <block type="s4d_get_string_of_data"/>
            <block type="jg_imghttps"/>
        </category>
        <category name="Advanced" colour="#4c79ff">
            <block type="jg_web_request_advanced_new2_send_request_to_url_using_method_with_result_giving_request_headers_with_data_sections_then_if_error">
                <value name="URL">
                    <block type="text">
                        <field name="TEXT">https://jsonplaceholder.typicode.com/posts</field>
                    </block>
                </value>
                <value name="HEADERS">
                    <block type="jg_web_request_advanced_header">
                        <value name="KEY">
                            <block type="text">
                                <field name="TEXT">content-type</field>
                            </block>
                        </value>
                        <value name="VALUE">
                            <block type="text">
                                <field name="TEXT">application/json</field>
                            </block>
                        </value>
                    </block>
                </value>
                <value name="BODY">
                    <block type="jg_web_request_advanced_data_section">
                        <field name="LABEL">body</field>
                        <value name="STATEMENTS">
                            <block type="jg_web_request_advanced_data">
                                <value name="KEY">
                                    <block type="text">
                                        <field name="TEXT">key</field>
                                    </block>
                                </value>
                                <value name="VALUE">
                                    <block type="text">
                                        <field name="TEXT">value</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                    </block>
                </value>
                <value name="IF_ERROR">
                    <block type="s4d_print">
                        <value name="PRINT">
                            <block type="frost_other_err"/>
                        </value>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_header">
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">content-type</field>
                    </block>
                </value>
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT">application/json</field>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_data_section"/>
            <block type="jg_web_request_advanced_data">
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">key</field>
                    </block>
                </value>
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT">value</field>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_get_response_data">
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT">key</field>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_response"/>
            <block type="jg_web_request_advanced_response_status"/>
            <block type="jg_web_request_advanced_response_headers"/>
            <block type="jg_web_request_advanced_response_data"/>
            <block type="jg_web_request_advanced_save_downloadable_response_as">
                <value name="FILE">
                    <shadow type="text">
                        <field name="TEXT">file.png</field>
                    </shadow>
                </value>
            </block>
        </category>
    </category>
    <category name="Applications" colour="#4c79ff">
        <category name="Minecraft" colour="110">
            <category name="Java" colour="120">
                <label text="Start by grabbing the server to get data from." web-class="boldtext"></label>
                <block type="jg_minecraft_getjava">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">25565</field>
                        </block>
                    </value>
                </block>
                <label text="The blocks below will get data from the server." web-class="boldtext"></label>
                <block type="jg_minecraft_java_motd"/>
                <block type="jg_minecraft_java_players"/>
                <block type="jg_minecraft_java_version"/>
                <block type="jg_minecraft_java_data"/>
                <label text="The blocks below will only work if the server has enabled query." web-class="boldtext"></label>
                <block type="jg_minecraft_queryjava">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">25565</field>
                        </block>
                    </value>
                </block>
                <block type="jg_minecraft_query_player_list"/>
                <block type="jg_minecraft_query_version"/>
                <block type="jg_minecraft_query_software"/>
                <block type="jg_minecraft_query_plugin_list"/>
                <block type="jg_minecraft_query_map"/>
                <block type="jg_minecraft_query_data"/>
            </category>
            <category name="Java (RCON)" colour="160">
                <label text="Run operator commands on your Minecraft Java server." web-class="boldtext"></label>
                <label text="You'll need to enable and setup RCON on your server for these to work." web-class="boldtext"></label>
                <block type="jg_minecraft_rcon_create_client">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">25575</field>
                        </block>
                    </value>
                </block>
                <block type="jg_minecraft_rcon_send_command">
                    <value name="COMMAND">
                        <block type="text">
                            <field name="TEXT">time set day</field>
                        </block>
                    </value>
                </block>
                <block type="jg_minecraft_rcon_disconnect"/>
                <block type="jg_minecraft_rcon_when_command_response"/>
                <block type="jg_minecraft_rcon_command_response"/>
            </category>
            <category name="Bedrock" colour="190">
                <label text="Start by grabbing the server to get data from." web-class="boldtext"></label>
                <block type="jg_minecraft_bedrock_get">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">19132</field>
                        </block>
                    </value>
                </block>
                <label text="The blocks below will get data from the server." web-class="boldtext"></label>
                <block type="jg_minecraft_bedrock_motd"/>
                <block type="jg_minecraft_bedrock_players"/>
                <block type="jg_minecraft_bedrock_server_info"/>
                <block type="jg_minecraft_bedrock_version"/>
                <block type="jg_minecraft_bedrock_edition"/>
                <block type="jg_minecraft_bedrock_data"/>
            </category>
        </category>
        <category name="Roblox" colour="0">
            <label text="Version 1.1 of Roblox Blocks" web-class="boldtext"></label>
            <label text="User info" web-class="boldtext"></label>
            <block type="jg_roblox_get_user_id_from_username"/>
            <block type="jg_roblox_user_id"/>
            <block type="jg_roblox_get_user_info"/>
            <block type="jg_roblox_user_info"/>
            <block type="jg_roblox_get_user_thumbnail"/>
            <block type="jg_roblox_user_thumbnail_info"/>
            <block type="jg_roblox_U2_get_users_avatar_asset_ids"/>
            <block type="jg_roblox_U2_users_avatar_asset_ids"/>
            <label text="Groups" web-class="boldtext"></label>
            <block type="jg_roblox_get_user_group"/>
            <block type="jg_roblox_group_info"/>
            <block type="jg_roblox_get_group_icon"/>
            <block type="jg_roblox_group_icon"/>
            <block type="jg_roblox_get_user_group_rank"/>
            <block type="jg_roblox_user_group_rank"/>
            <label text="Blocks that require login" web-class="boldtext"></label>
            <label text="You will need to get your .ROBLOSECURITY cookie for these." web-class="boldtext"></label>
            <label text="You can probably find tutorials online, but make sure to hide the cookie once you have it." web-class="boldtext"></label>
            <block type="jg_roblox_U2_login_with_security_cookie">
                <value name="COOKIE">
                    <block type="frost_env">
                        <value name="VALUE">
                            <block type="text">
                                <field name="TEXT">roblox_cookie</field>
                            </block>
                        </value>
                    </block>
                </value>
            </block>
            <label text="The blocks below are marked with a star to show they need a login." web-class="boldtext"></label>
            <block type="jg_roblox_U2_currently_logged_in_users"/>
            <block type="jg_roblox_U2_wear_list_of_assets"/>
            <block type="jg_roblox_U2_set_avatar_type"/>
            <block type="jg_roblox_U2_remove_asset_id_from_avatar"/>
            <block type="jg_roblox_U2_accept_friend_request"/>
            <block type="jg_roblox_U2_decline_friend_request"/>
            <block type="jg_roblox_U2_decline_all_friend_requests"/>
            <block type="jg_roblox_U2_block_user"/>
            <block type="jg_roblox_U2_unblock_user"/>
            <!--
            <block type="jg_roblox_U2_follow_user_id"/>
            -->
            <block type="jg_roblox_U2_unfollow_user_id"/>
            <block type="jg_roblox_U2_send_message_to_user_id"/>
            <block type="jg_roblox_U2_send_friend_request"/>
            <block type="monaco_roblox_buy"/>
        </category>
		<category name="Reddit" colour="#5ba58b">
		    <block type="ran_red_post"/>
			<block type="postVars"/>
	        <block type="get_about_then"/>
			<block type="about_user"/>
		</category>
        <category name="Scratch and Github" colour="#1f1f1f">
            <label text="Github" web-class="boldtext"></label>
            <block type="github_get_then"/>
            <label text="For profile" web-class="boldtext"></label>
            <block type="github_what_stat"/>
            <label text="" web-class="boldtext"></label>
            <label text="" web-class="boldtext"></label>
            <label text="Scratch" web-class="boldtext"></label>
            <block type="scratch_get_about_then"/>
            <block type="scratch_about_user"/>
        </category>
        <category name="CloudConvert" colour="#3333ff">
            <label text="API starter" web-class="boldtext"></label>
            <block type="convert_api_code"/>
            <label text="Main blocks" web-class="boldtext"></label>
            <block type="convert_api_task"/>
            <block type="save_api_code"/>
            <block type="convert_api_file"/>
            <block type="send_ahq_converted"/>
            <label text="Resources" web-class="boldtext"></label>
            <block type="convert_button"/>
            <block type="convert_embed"/>
        </category>
        <category name="YouTube" colour="#ff0000">
            <block type="gsa_ytdl"/>
            <block type="gsa_ytdl_info"/>
            <block type="gsa_ytdl_get_info"/>
            <block type="video_raw"/>
            <block type="on_newvideo"/>
            <block type="add_channel"/>
        </category>
        <category name="Message Games" colour="#5ba58b">
            <label text="Akinator gamemodes: character, animal, object" web-class="boldtext"></label>
	 		<block type="Akinator">
                <value name="MESSAGE">
                    <shadow type="aki_gametype"/>
                </value>
            </block>
			<block type="s4d_snake"/>
            <block type="snake_js"/>
            <block type="s4d_cal"/>
		</category>
    </category>
    <category name="Securing" colour="#4c61ff">
        <label text="Output blocks" web-class="boldtext"></label>
           <label text="Securing text" web-class="boldtext"></label>

            <block type="catsoup_encryption_sha256">
                <value name="encode">
                    <shadow type="text"/>
                </value>
            </block>
            <block type="jg_encryption_encrypt_text">
                <value name="encode">
                    <shadow type="text"/>
                </value>
                <value name="key">
                    <shadow type="frost_env">
                        <value name="VALUE">
                            <shadow type="text">
                                <field name="TEXT">encryptionKey</field>
                            </shadow>
                        </value>
                    </shadow>
                </value>
            </block>
            <block type="jg_encode_hash">
                <value name="encode">
                    <shadow type="text"/>
                </value>
                <value name="rounds">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_encode_checkhash">
                <value name="hash">
                    <shadow type="text"/>
                </value>
                <value name="test">
                    <shadow type="text"/>
                </value>
            </block>
	    <block type="create_random_string"/>
        <label text="Encoding text" web-class="boldtext"></label>
            <block type="jg_encode_main">
                <value name="type">
                    <shadow type="jg_bDI_encodedecodetype"/>
                </value>
                <value name="type2">
                    <shadow type="jg_bDI_encodedecodetype"/>
                </value>
                <value name="encode">
                    <shadow type="text"/>
                </value>
            </block>
        <!--<label text="Functions" web-class="boldtext"></label>-->
    </category>
        <sep class="bt"/>
            <category name="Files" colour="#faaf00">
                <category name="Text" colour="#fa9e00">
                    <!--<category name="File Editing" colour="45">-->
                        <block type="jg_file_create"/>
                        <block type="jg_file_contents"/>
                        <block type="jg_file_extension"/>
                        <block type="jg_file_metadata"/>
                        <block type="jg_file_foreachfile"/>
                        <block type="jg_file_foreachfileinput"/>
                    <!--</category>-->
                    <!--<category name="filesystem (fs)" colour="#347dfa">-->
                        <block type="frost_fs_read">
                            <statement name="THEN">
                                <block type="controls_if">
                                    <value name="IF0">
                                        <block type="frost_other_err">
                                        </block>
                                    </value>
                                    <statement name="DO0">
                                        <block type="s4d_print">
                                            <value name="PRINT">
                                                <block type="frost_other_err">
                                                </block>
                                            </value>
                                        </block>
                                    </statement>
                                </block>
                            </statement>
                        </block>
                        <block type="frost_fs_append">
                            <statement name="THEN">
                                <block type="controls_if">
                                    <value name="IF0">
                                        <block type="frost_other_err">
                                        </block>
                                    </value>
                                    <statement name="DO0">
                                        <block type="s4d_print">
                                            <value name="PRINT">
                                                <block type="frost_other_err">
                                                </block>
                                            </value>
                                        </block>
                                    </statement>
                                </block>
                            </statement>
                        </block>
                        <block type="frost_fs_write">
                            <statement name="THEN">
                                <block type="controls_if">
                                    <value name="IF0">
                                        <block type="frost_other_err">
                                        </block>
                                    </value>
                                    <statement name="DO0">
                                        <block type="s4d_print">
                                            <value name="PRINT">
                                                <block type="frost_other_err">
                                                </block>
                                            </value>
                                        </block>
                                    </statement>
                                </block>
                            </statement>
                        </block>
                        <block type="frost_fs_rename">
                            <statement name="THEN">
                                <block type="controls_if">
                                    <value name="IF0">
                                        <block type="frost_other_err">
                                        </block>
                                    </value>
                                    <statement name="DO0">
                                        <block type="s4d_print">
                                            <value name="PRINT">
                                                <block type="frost_other_err">
                                                </block>
                                            </value>
                                        </block>
                                    </statement>
                                </block>
                            </statement>
                        </block>
                        <block type="frost_fs_delete">
                            <statement name="THEN">
                                <block type="controls_if">
                                    <value name="IF0">
                                        <block type="frost_other_err">
                                        </block>
                                    </value>
                                    <statement name="DO0">
                                        <block type="s4d_print">
                                            <value name="PRINT">
                                                <block type="frost_other_err">
                                                </block>
                                            </value>
                                        </block>
                                    </statement>
                                </block>
                            </statement>
                        </block>
                        <label text="For open and read (Gives the contents of the file)"></label>
                        <block type="frost_fs_data"/>
                        <!--
                        <label text="For if you get an error (is a boolean and string)"></label>
                        <block type="frost_fs_err"/>
                        -->
                        <label text="ㅤ" web-class="boldtext"></label>
                    <!--</category>-->
                </category>
                <category name="Data" colour="#fa9200">
                    <!--<category name="Data Blocks" colour="230">-->
                        <block type="jg_web_currentdata"/>
                        <block type="jg_web_valueofkey"/>
						<block type="jg_web_keywithvalue"/>
                        <block type="jg_web_valueofflkey"/>
                        <block type="jg_web_haskey"/>
                        <block type="jg_web_allkey"/>
						<block type="jg_web_allval"/>
                        <block type="jg_web_keycount"/>
                        <block type="jg_web_keynumber"/>
                        <label text="Loops" web-class="boldtext"></label>
                        <block type="jg_web_foreachkey"/>
                        <block type="jg_web_foreachkeyinput"/>
                    <!--</category>-->
                </category>
                <category name="Images" colour="#fa8100">
                    <category name="Image Editing" colour="#e67600">
                        <label text="Creating / Editing an image" web-class="boldtext"></label>
                        <label text="Getting started" web-class="boldtext"></label>
                        <block type="jg_beginJimp"/>
                        <block type="jg_saveJimpageAs"/>
                        <label text="Effects and extras" web-class="boldtext"></label>
                        <block type="jg_jimp_drawtext"/>
                        <!--
                        <block type="jg_jimp_U2_drawtext"/>
                        -->

                        <block type="jg_jimp_brightnesscontrast"/>
                        <block type="jg_jimp_basicE"/>
                        <block type="jg_jimp_tpixels"/>
                        <block type="jg_jimp_opacity"/>
                        <block type="jg_jimp_width"/>
                        <block type="jg_jimp_height"/>
                        <block type="jg_jimp_resize"/>
                        <block type="jg_jimp_resizeMethods"/>
                        <block type="jg_jimp_scale"/>
                        <block type="jg_jimp_crop"/>
                        <block type="jg_jimp_flip"/>
                        <block type="jg_jimp_rotate"/>
                        <block type="jg_jimp_blit"/>
                        <block type="jg_jimp_composite"/>
                        <block type="jg_jimp_mask"/>
                        <block type="jg_jimp_pixelate">
                            <value name="X">
                                <block type="math_number">
                                    <field name="NUM">0</field>
                                </block>
                            </value>
                            <value name="Y">
                                <block type="math_number">
                                    <field name="NUM">0</field>
                                </block>
                            </value>
                            <value name="Width">
                                <block type="jg_jimp_width"/>
                            </value>
                            <value name="Height">
                                <block type="jg_jimp_height"/>
                            </value>
                        </block>
                        <block type="jg_jimp_qblur"/>
                        <block type="jg_jimp_sblur"/>
                        <block type="jg_jimp_poster"/>
                        <block type="jg_jimp_jpgqual"/>
                        <block type="jg_jimp_convolute"/>
                        <block type="jg_jimp_kernels"/>
                        <block type="jg_jimp_setpixel"/>
                        <block type="jg_jimp_getpixel"/>
                    </category>
                    <category name="Simple Effects" colour="#cf6b00">
                        <label text="Generating simple effects" web-class="boldtext"></label>
                        <block type="1imagepng">
                            <mutation divisor_input="true"/>
                        </block>
                        <block type="1imagegif"/>
                        <block type="2imagepng"/>
                        <block type="load_gif"/>
                        <block type="load_image"/>
                        <block type="send_on_channel"/>
                        <block type="jose_send_image_slash"/>
                    </category>
                    <category name="Captchas" colour="#b85f00">
                        <label text="Captchas" web-class="boldtext"></label>
                        <block type="create_captcha"/>
                        <block type="captcha_image"/>
                        <block type="captcha_value"/>
                        <block type="send_captcha"/>
                    </category>
                    <category name="Member Cards" colour="#a85700">
                        <label text="Send any created card"></label>
					    <block type="s4d_send_in_channel"/>
                        <label text="Welcome card"></label>
					    <block type="s4d_create_welcome_then"/>
					    <block type="s4d_set_username"/>
					    <block type="s4d_set_member_count"/>
					    <block type="s4d_set_discriminator"/>
					    <block type="s4d_set_background"/>
					    <block type="s4d_set_avatar"/>
					    <block type="s4d_set_guild_name"/>
					    <block type="s4d_set_color"/>
                        <label text="Goodbye card"></label>
						<block type="s4d_create_goodbye_then"/>
						<block type="s4d_set_username"/>
						<block type="s4d_set_member_count"/>
						<block type="s4d_set_discriminator"/>
						<block type="s4d_set_background"/>
						<block type="s4d_set_avatar"/>
						<block type="s4d_set_guild_name"/>
						<block type="s4d_set_color"/>
                        <label text="Rank card"></label>
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
				    </category>
                </category>
                <!--
                <category name="Video" colour="#fa7000">
                    <label text="Warning!"></label>
                    <label text="Repl.it currently doesn't support FFMPEG, which video blocks need!"></label>
                    <label text="It should work if your hosting your bot on your PC though."></label>
                    <button text="How to install FFMPEG" callbackKey="FFMPEG"></button>
                    <block type="jg_files_ffmpeg_video_get_video_with_file_name_then">
                        <value name="FILE">
                            <shadow type="text">
                                <field name="TEXT">MyVideo.mp4</field>
                            </shadow>
                        </value>
                    </block>
                </category>
                -->
            </category>
            <category name="Databases" colour = "#2AC395">

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
            
            <category name="{{ TOOLBOX_DATABASE }}" colour="#F1DA54">
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
            <block type="s4d_get_all_data"/>
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
            <block type="s4d_delete_all_data"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
	        <category name="Dootabase" colour="#25CADE">
            <label text="%{BKY_LABEL_READ_DB}"></label>
<block type="s4d_set_db2">
<value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">database</field>
                    </shadow>
                </value>
                </block>
            <block type="s4d_get_data2">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_has_data2">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_get_all_data2"/>
            <label text="%{BKY_LABEL_UPDATE_DB}"></label>
            <block type="s4d_set_data2">
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
            <block type="s4d_delete_data2">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_add_data2">
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
            <block type="s4d_subtract_data2">
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
<block type="s4d_multi_data2">
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
<block type="s4d_divide_data2">
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
            <block type="s4d_delete_all_data2"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="Replit DB" colour="#150b91">
        
        <block type="parham_replitdb_setto">
            <value name="set">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
            <value name="to">
                <shadow type="text">
                    <field name="TEXT">world</field>
                </shadow>
            </value>
        </block>
        <label text="On These Blocks You Can Use Data Block"/>
        <block type="parham_replitdb_getall"/>
        <block type="parham_replitdb_get">
            <value name="get">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        <block type="parham_replitdb_data"/>
        <label text="You Can't Use Data Block On This Blocks"/>
        <block type="parham_replitdb_delete">
            <value name="delete">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        </category>

        <category name="SQLite DB" colour="#A025DE">
            <label text="%{BKY_LABEL_READ_DB}"></label>
            <block type="qdb_get">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="qdb_all"/>
            <block type="qdb_has_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_LABEL_UPDATE_DB}"></label>
            <block type="qdb_set_data">
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
            <block type="qdb_delete_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="qdb_add_data">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="qdb_subtract">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="TEXT">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="qdb_push">
                <value name="DATA">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
            </block>
            <block type="qdb_pull">
                <value name="DATA">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
            </block>
        </category>

        <!--
        <category name="Firebase" colour="#ffb866"/>
        <category name="Oracle" colour="#fff266"/>
        <category name="PostgreSQL" colour="#66ffcf"/>
        <category name="Microsoft SQL Server" colour="#9c66ff"/>
        <category name="Redis" colour="#ff6691"/>
        <category name="Elasticsearch" colour="#b8ff66"/>
        <category name="Cassandra" colour="#66c9ff"/>
        <category name="MariaDB" colour="#ff8766"/>
        <category name="IBM Db2" colour="#ff66e5"/>
        -->

            </category>
        <sep class="bt"/>
        





        <category name="Comments" colour="#DDAA00">
            <label text="Comments allow you to explain what your blocks do."></label>
            <label text="You can add comments onto specific blocks by going on a block, then Right Click > Add Comment"></label>
            <label text="However, these floating comments allow you to place them anywhere and be always visible!"></label>
            <block type="jg_unused_floating_comment">
                <field name="TEXT">This is a floating comment,&amp;#10;with new lines too!</field>
            </block>
            <block type="jg_comments_floating_arrow"/>
            <block type="jg_comments_floating_image">
                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
            </block>
            <label text="If you want a connected comment but always visible..."></label>
            <block type="jg_comments_connected_comment">
                <field name="TEXT">This is a connected comment,&amp;#10;but it'll always be visible!</field>
            </block>
            <block type="jg_comments_connected_arrow"/>
            <block type="jg_comments_connected_image">
                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
            </block>
        </category>
        <!--
        <category name="redman13 embed" colour="#ff0000">
            <block type="gsa_add_blank_field"/>
            <block type="gsa_add_field"/>
            <block type="gsa_create_fields"/>
            <block type="gsa_set_embed_timestamp"/>
            <block type="gsa_create_embed"/>
            <block type="gsa_send_embed"/>
            <block type="gsa_set_embed_author"/>
            <block type="gsa_set_embed_color"/>
            <block type="gsa_set_embed_description"/>
            <block type="gsa_set_embed_image"/>
            <block type="gsa_set_embed_thumbnail"/>
            <block type="gsa_set_embed_title"/>
            <block type="gsa_set_embed_footer"/>
        </category>
        -->
        
    </xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
        return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))

    // OLD searching code
    /*
    
    // preparing variables for searching
    
        const default_max_length = 250
        var CATEGORYCONTENT;
    
    // set default blocks from BlocklyComponent function code
    
    const toolboxArray = toolbox_xml_contents.split('\n');
                var blocks = []
                var pushed
                var repeat_end = toolboxArray.length;
                for (var count = 0; count < repeat_end; count++) {
                    if ((toolboxArray[count].includes('<block type="')) && !(toolboxArray[count].includes('LINE HIDDEN FROM SEARCH'))) {
                        pushed = (((toolboxArray[count].replaceAll(" ", "")).replaceAll('blocktype="', "")).replaceAll("/", "").replaceAll("<", "").replaceAll('"', "")).replaceAll("'", "").replaceAll("\t", "")
                        pushed = pushed.slice(0, pushed.indexOf('>'));
                        if (!(blocks.includes(pushed))) {
                            blocks.push(pushed)
                        }
                    }
                }
    
    // set the default blocks and run the searching code
    
    const defaultblocks = blocks
    
        if (searching) {
            var newblocks = []
            var check;
            var searchparam = prompt("Search for a block with:")
            if (!(searchparam)) {
                searchparam = "null"
            }
            var searchparamFiltered = ((searchparam.replaceAll("<", "_")).replaceAll(">", "_")).replaceAll("\\", "_")
            searchparam = searchparam.replaceAll(" ", "_").toLowerCase()
            var repeat_end = defaultblocks.length;
            for (var count = 0; count < repeat_end; count++) {
                check = defaultblocks[count];
                if (String(check).includes(String(searchparam)) && !(String(check).includes("LINE HIDDEN FROM SEARCH"))) {
                    newblocks.push(check);
                }
            }
            if (newblocks.length > 1) {
                var s = "s"
            } else {
                var s = ""
            }
            if (newblocks.length > 0) {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}, found ${newblocks.length} block${s} that matched" web-class="boldtext"></label><block type="${newblocks.join("\"/>\n<block type=\"")}"/>`
            } else {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
            }
        } else {
            var length_lessthan_350 = true
            if (defaultblocks.length < default_max_length) {
                var newblocks = defaultblocks
            } else {
                length_lessthan_350 = false
                var newblocks = defaultblocks.slice(0, default_max_length)
            }
            if (newblocks.length > 0) {
                var CATEGORYCONTENT = "<block type=\"" + newblocks.join("\"/>\n<block type=\"") + "\"/>"
                if (length_lessthan_350 == false) {
                    CATEGORYCONTENT = CATEGORYCONTENT + `<label text="${defaultblocks.length - default_max_length} blocks left..." web-class="boldtext"></label>`
                }
            } else {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
            }
        }
        toolbox_xml_contents = toolbox_xml_contents.replace("<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->", CATEGORYCONTENT)
    
    */


    return toolbox_xml_contents


}
