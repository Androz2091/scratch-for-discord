export default (favorites) => {
    return `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <category name="Search" colour="#42556e" css-icon="customIcon2 fa fa-search">
        <label text="Search category! Version 1.21"/>
        <sep gap="32"/>
        <button text="Search for Block" callbackKey="SEARCH"/>
        <label text="Click the search category again if nothing happens."/>
        <sep gap="32"/>
        <!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->
    </category>
    <category name="Favorites" colour="#FFFF00" css-icon="customIcon fa fa-star">
        <label text="Add your favorite blocks here by right clicking them and pressing &quot;Add to favorite!&quot;"/>
        ${favorites === null ? "" : favorites.map((c) => `<block type="${c}"/>`)}
    </category>
    <category name="Custom Blocks" colour="#808080" css-icon="customIcon2 fa fa-gear" hidden="${String(!window.isInS4DDebugMode)}">
        <label text="Custom blocks are currently in testing!"/>
        <label text="If you found any vulnerabilities or bugs, let us know!"/>
        <button text="Create block..." callbackKey="LAUNCHCUSTOMBLOCKBUILDER"/>
        <sep gap="32"/>
        ${window.customBlocks.map(x => `<block type="${x}"/>`).join('\n')}
    </category>
    <sep class="bt"/>
    <category name="Logic" colour="#5b80a5">
        <block type="controls_if"/>
        <block type="logic_compare">
            <field name="OP">EQ</field>
        </block>
        <block type="logic_operation">
            <field name="OP">AND</field>
        </block>
        <block type="logic_negate"/>
        <block type="logic_boolean">
            <field name="BOOL">TRUE</field>
        </block>
        <block type="logic_null"/>
        <block type="logic_ternary"/>
        <block type="jg_logic_is_equal_to_and_is_the_same_type_as"/>
        <block type="s4d_lasercat_switch_switch"/>
        <block type="lasercat_jg_case_default"/>
        <sep gap="32"/>
    </category>
    <category name="Loops" colour="#5ba55b">
        <block type="s4d_forever"/>
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
        <label text="More Options" web-class="boldtext"/>
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
        <sep gap="32"/>
    </category>
    <category name="Math" colour="#5b67a5">
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
            <mutation divisor_input="false"/>
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
            <mutation op="SUM"/>
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
        <block type="math_random_float"/>
        <sep gap="32"/>
    </category>
    <category name="Text" colour="#5ba58c">
        <block type="jg_text_remake_paragraph_quotes"/>
        <block type="text_join">
            <mutation items="2"/>
        </block>
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
        <block type="s4d_newline"/>
        <block type="text_append">
            <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"/>
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
                    <field name="TEXT"/>
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
            <mutation at="true"/>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                </block>
            </value>
        </block>
        <block type="text_getSubstring">
            <mutation at1="true" at2="true"/>
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
        <block type="text_count"/>
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
        <sep gap="32"/>
    </category>
    <category name="Lists" colour="#745ba5">
        <block type="lists_create_with">
            <mutation items="0"/>
        </block>
        <block type="lists_create_with">
            <mutation items="3"/>
        </block>
        <block type="lists_repeat">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
        </block>
        <block type="lists_length"/>
        <block type="lists_isEmpty"/>
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
            <mutation statement="false" at="true"/>
            <field name="MODE">GET</field>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_setIndex">
            <mutation at="true"/>
            <field name="MODE">SET</field>
            <field name="WHERE">FROM_START</field>
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getSublist">
            <mutation at1="true" at2="true"/>
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
            <mutation mode="SPLIT"/>
            <field name="MODE">SPLIT</field>
            <value name="DELIM">
                <shadow type="text">
                    <field name="TEXT">,</field>
                </shadow>
            </value>
        </block>
        <block type="jg_lists_regex_list_of_matches_from_regex_on_text"/>
        <sep gap="32"/>
    </category>
    <category name="Colors" colour="#a5745b">
        <block type="colour_picker">
            <field name="COLOUR">#ff0000</field>
        </block>
        <block type="colour_random"/>
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
        <sep gap="32"/>
    </category>
    <sep class="bt"/>
    <category name="Variables" colour="#a55b80" custom="VARIABLE"/>
    <category name="Expanded Variables" colour="#9F5B93">
        <label text="Make global/local variables for functions and other stuff"/>
        <label text="Compatible with variables category"/>
        <block type="import_all">
            <value name="VAR">
                <shadow type="text">
                    <field name="TEXT"/>hey
                
                </shadow>
            </value>
        </block>
        <block type="express_var">
            <value name="VAR">
                <shadow type="text">
                    <field name="TEXT"/>hey
                
                </shadow>
            </value>
        </block>
        <block type="blank">
            <field name="TEXT"/>
        </block>
    </category>
    <category name="Functions" colour="#995ba5" custom="PROCEDURE"/>
    <category name="Collections" colour="#a354b3">
        <label text="Collections are able to hold data." web-class="boldtext"/>
        <label text="It's like a list, but you attach a key to the data." web-class="boldtext"/>
        <label text="You can then grab the data using the key later." web-class="boldtext"/>
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
        <label text="When storing a collection to a database, it gets converted." web-class="boldtext"/>
        <label text="This block can be used to bring it back to a usable collection." web-class="boldtext"/>
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
    <category name="Buffers" colour="#AE4FA7">
        <label text="creating a buffer" web-class="boldtext"/>
        <block type="gsa_buffer_from_string">
            <value name="string">
                <block type="text">
                    <field name="TEXT">Hey!</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_empty">
            <value name="number">
                <block type="math_number">
                    <field name="NUM">5</field>
                </block>
            </value>
            <value name="fill">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <label text="interacting with a buffer" web-class="boldtext"/>
        <block type="gsa_buffer_index_of_string_number_or_buffer">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_includes_string_or_buffer">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_get_length">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_get_from_index">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_set_from_index">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="value">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
    </category>
    <category name="Objects" colour="#BA4A9A">
        <label text="Objects are similar to collections, but have more functionality." web-class="boldtext"/>
        <label text="They also don't get converted when saving into a database!" web-class="boldtext"/>
        <sep gap="32"/>
        <label text="Object creation" web-class="boldtext"/>
        <block type="gsa_new_object_creator_empty_search_moment_searchMoment"/>
        <block type="gsa_new_object_item_creator_empty_search_moment_searchMoment"/>
        <sep gap="32"/>
        <block type="jg_objects_create_new"/>
        <label text="Object stuff" web-class="boldtext"/>
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
        <block type="gsa_object_has_value_search_moment">
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
        <block type="gsa_delete_object_search_moment_searchMoment">
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
        <label text="For something like getting the amount of keys in an object..." web-class="boldtext"/>
        <block type="jg_objects_get_objects_key_names_in_list">
            <value name="OBJECT">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <label text="for working with json" web-class="boldtext"/>
        <block type="frost_json_to_string">
            <value name="STRING">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <block type="gsa_convert_parse_json_so_it_becomes_list_or_object">
            <value name="message">
                <shadow type="text">
                    <field name="TEXT">{ "example": "🐔" }</field>
                </shadow>
            </value>
        </block>
    </category>
    <category name="Others" colour="#D14081">
        <block type="s4d_print">
            <value name="PRINT">
                <block type="frost_other_err"/>
            </value>
        </block>
        <block type="s4d_clearconsole"/>
        <block type="s4d_run_save_output"/>
        <block type="s4d_wait_seconds">
            <value name="TIME">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="gsa_function_item_creator_empty_search_moment_searchMoment"/>
        <block type="gsa_function_item_runer">
            <mutation xmlns="http://www.w3.org/1999/xhtml" inputs="null" return="false"/>
        </block>
        <block type="blank_code">
            <field name="TEXT"/>
        </block>
        <block type="s4d_eval"/>
        <block type="s4d_eval2"/>
        <block type="s4d_exec"/>
        <block type="jg_other_try_catch_finally">
            <mutation xmlns="http://www.w3.org/1999/xhtml" iferror="true"/>
            <statement name="IFERROR">
                <block type="s4d_print">
                    <value name="PRINT">
                        <block type="frost_other_err"/>
                    </value>
                </block>
            </statement>
        </block>
        <block type="jg_s4d_other_throw_custom_error">
            <value name="ERROR">
                <block type="text"/>
            </value>
        </block>
        <block type="frost_other_err"/>
        <block type="s4d_return"/>
        <block type="jg_s4d_other_run_code_inside_file"/>
        <block type="is_a_number_or_string"/>
        <block type="s4d_string_to_number"/>
        <block type="frost_current"/>
        <block type="unix_to_date"/>
        <block type="get_in_date"/>
        <block type="date_to_unix"/>
        <block type="create_qr_then"/>
        <block type="qr"/>
        <block type="gsa_bypass_type"/>
        <block type="gsa_typeof"/>
        <block type="gsa_format_time"/>
    </category>
    <sep class="bt"/>
    <category name="Base" colour="#F46580">
        <label text="%{BKY_MANDATORY_BLOCKS}" web-class="boldtext"/>
        <block type="s4d_login">
            <value name="TOKEN">
                <shadow type="text">
                    <field name="TEXT">Your bot token</field>
                </shadow>
            </value>
        </block>
        <label text="Repl"/>
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
        <label text="%{BKY_BASE_BLOCKS}"/>
        <block type="s4d_on_connected"/>
        <label text="%{BKY_BOT_INFORMATIONS}"/>
        <block type="jg_base_bot"/>
        <block type="s4d_bot_server_count"/>
        <block type="s4d_bot_startup_time"/>
        <block type="s4d_get_bot"/>
        <block type="s4d_bot_amount"/>
        <label text="%{BKY_BOT_ACTIONS}"/>
        <block type="s4d_set_bot_game"/>
        <block type="s4d_set_bot_stream_text"/>
        <block type="s4d_bot_shutdown"/>
        <label text="Some more advanced features" web-class="boldtext"/>
        <block type="jg_when_ran"/>
        <block type="gsa_async"/>
        <block type="jg_rbs_isRunButton"/>
        <block type="ps_os_stats"/>
        <block type="get_cpu_uptime"/>
        <block type="cpu"/>
        <sep gap="32"/>
    </category>
    <category name="Messages" colour="#4C97FF">
        <label text="%{BKY_MESSAGE_RELATED_BLOCKS}" web-class="boldtext"/>
        <label text="%{BKY_DETECT_MESSAGES}"/>
        <block type="s4d_on_message"/>
        <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"/>
        <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"/>
        <block type="Message"/>
        <block type="s4d_message_channel"/>
        <block type="frost_message_category"/>
        <block type="s4d_message_guild"/>
        <label text="%{BKY_MESSAGE_INFORMATIONS}"/>
        <block type="s4d_message_content"/>
        <block type="s4d_message_id"/>
        <block type="s4d_message_ts"/>
        <block type="s4d_message_author"/>
        <block type="s4d_message_member"/>
        <block type="s4d_mentioned_member"/>
        <block type="s4d_mentioned_channel"/>
        <block type="s4d_mentioned_role"/>
        <block type="lime_msg_author_attributes"/>
        <label text="Attributes of the message"/>
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
        <label text="Attributes of any message"/>
        <block type="jg_messages_value_dropdown_content_of_message"/>
        <label text="Get attachments on the message" web-class="boldtext"/>
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
        <block type="gsa_send_new_attachment_in_channel"/>
        <label text="Respond to a recieved message"/>
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
                    <field name="TEXT">Hey!</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_edit">
            <value name="CONTENT">
                <shadow type="text">
                    <field name="TEXT">Hey!</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_reply_delete"/>
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
        <label text="Files"/>
        <block type="jg_messages_send_file_and_message_with_button_row_to_channel"/>
        <label text="%{BKY_FIND_MESSAGE}"/>
        <block type="s4d_get_msg_then"/>
        <block type="edit_msg_by_id"/>
        <label text="Message actions"/>
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
        <block type="s4d_delete"/>
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
        <block type="s4d_wait_react_emoji_id"/>
        <block type="s4d_wait_react_emoji_name"/>
        <block type="lime_s4d_pin"/>
        <block type="jg_messages_crosspost_message">
            <value name="MESSAGE">
                <block type="Message"/>
            </value>
        </block>
        <label text="Simple Embeds! If you want to keep it all simple, use these embeds."/>
        <block type="gsa_simple_embed"/>
        <block type="gsa_set_simple_embed_author"/>
        <block type="gsa_set_simple_embed_footer"/>
        <block type="gsa_create_simple_embed_fields"/>
        <block type="gsa_simple_field"/>
        <label text="Blocks for handling typing" web-class="boldtext"/>
        <block type="typing_start"/>
        <block type="jg_typing_typing_attribute"/>
        <sep gap="32"/>
    </category>
    <category name="Threads" colour="#478ded">
        <label text="Find a thread"/>
        <block type="s4d_thread_get_then">
            <value name="ID">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="CHANNEL">
                <block type="s4d_message_channel"/>
            </value>
        </block>
        <block type="s4d_gotten_thread"/>
        <label text="Start a thread"/>
        <block type="s4d_message_start_thread"/>
        <block type="s4d_start_thread"/>
        <block type="s4d_started_thread"/>
        <label text="This can be used with thread blocks"/>
        <block type="s4d_message_channel"/>
        <label text="Detect an updated thread"/>
        <block type="s4d_on_thread_update"/>
        <block type="s4d_updated_thread"/>
        <label text="Detect a created thread"/>
        <block type="s4d_on_thread_create"/>
        <block type="s4d_created_thread_on"/>
        <label text="Detect a deleted thread"/>
        <block type="s4d_on_thread_delete"/>
        <block type="s4d_deleted_thread"/>
        <label text="Information about the thread"/>
        <block type="s4d_thread_boolean"/>
        <block type="s4d_thread_channel"/>
        <block type="s4d_thread_name"/>
        <block type="s4d_thread_id"/>
        <block type="s4d_thread_server"/>
        <block type="s4d_thread_info"/>
        <label text="Actions on the thread"/>
        <block type="s4d_thread_archive"/>
        <block type="s4d_thread_member_add"/>
    </category>
    <category name="Webhooks" colour="#475ded">
        <block type="s4d_create_webhook_then"/>
        <block type="jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do"/>
        <block type="s4d_edit_webhook"/>
        <block type="jose_jg_as_created_webhook_send"/>
        <block type="jose_jg_s4d_as_created_webhook_send_with_allowed_mentions_on_lists_user_ids_role_ids"/>
        <block type="jose_jg_webhooks_as_created_webhook_send_with_name_profile_picture_url"/>
        <block type="jose_jg_delete_created_webhook_with_reason"/>
        <block type="s4d_webhook_id"/>
        <block type="s4d_webhook_token"/>
        <block type="s4d_get_webhook_then"/>
        <block type="s4d_get_edit_webhook"/>
        <block type="s4d_send_webhook"/>
        <block type="gsa_jose_jg_webhooks_as_webhook_send_with_name_profile_picture_url"/>
        <block type="jose_jg_s4d_as_webhook_send_with_allowed_mentions_on_lists_user_ids_role_ids"/>
        <block type="jose_jg_gained_delete_webhook_with_reason"/>
        <block type="jose_jg_webhooks_get_all_webhooks_in_channel_then"/>
        <block type="jose_jg_webhooks_amount_of_webhooks"/>
        <block type="jose_jg_webhooks_webhook_with_id_exists_in_channel"/>
        <block type="jose_jg_webhooks_get_webhook_with_id"/>
        <block type="jose_jg_webhooks_get_webhook_information"/>
        <block type="jose_jg_webhooks_delete_webhook_with_reason"/>
    </category>
    <category name="Joins" colour="#5AD05F">
        <label text="%{BKY_JOINS_RELATED_BLOCKS}" web-class="boldtext"/>
        <label text="%{BKY_DETECT_JOINS}"/>
        <block type="s4d_on_member_join"/>
        <label text="%{BKY_JOINING_MEMBER_INFORMATIONS}"/>
        <block type="s4d_joining_member"/>
        <block type="s4d_joining_guild"/>
        <label text=" "/>
        <label text="%{BKY_LEAVES_RELATED_BLOCKS}" web-class="boldtext"/>
        <label text="%{BKY_DETECT_LEAVES}"/>
        <block type="s4d_on_member_leave"/>
        <label text="%{BKY_LEAVING_MEMBER_INFORMATIONS}"/>
        <block type="jg_joins_subleaves_leaving_member"/>
        <block type="s4d_leaving_guild"/>
    </category>
    <category name="Reactions" colour="#89674A">
        <label text="%{BKY_REACT_RELATED_BLOCKS}" web-class="boldtext"/>
        <label text="%{BKY_DETECT_REACT}"/>
        <block type="s4d_on_react_added"/>
        <block type="s4d_on_react_removed"/>
        <label text="%{BKY_REACT_INFORMATIONS}"/>
        <block type="s4d_react_message"/>
        <block type="s4d_react_message_id"/>
        <block type="s4d_react_emoji"/>
        <block type="s4d_react_member"/>
        <block type="s4d_react_count"/>
        <block type="s4d_remove_all_reactions"/>
        <block type="s4d_remove_reactions"/>
        <block type="reaction_channel"/>
        <block type="reaction_emoji_id"/>
        <block type="remove_all_reactions_of_user"/>
        <block type="remove_reaction_of_user"/>
        <block type="random_reacting_member_user"/>
        <block type="reaction_server"/>
        <block type="get_reaction_member"/>
        <sep gap="32"/>
    </category>
    <category name="More Events" colour="#EABB11">
        <category name="Server" colour="#52fc03">
            <block type="on_server_update"/>
            <block type="server_update_vars"/>
        </category>
        <category name="Edited" colour="#e85a66">
            <label text="Event" web-class="boldtext"/>
            <block type="when_message_is_edited"/>
            <label text="Event attributes" web-class="boldtext"/>
            <block type="jg_edited_old_new_message"/>
            <block type="jg_messages_value_dropdown_content_of_message"/>
            <block type="redo_maybe_idk_jg_newmsg_edit_date_timestamp_of_message_edit"/>
            <sep gap="32"/>
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
            <label text="%{BKY_DELETED_RELATED_BLOCKS}" web-class="boldtext"/>
            <label text="%{BKY_DELETED_EVENT}"/>
            <block type="s4d_on_deleted"/>
            <label text="%{BKY_MESSAGE_INFORMATIONS}"/>
            <block type="Message"/>
            <block type="s4d_message_content_deleted"/>
            <block type="s4d_message_server_deleted"/>
            <block type="s4d_message_channel_deleted"/>
            <block type="s4d_message_author_deleted"/>
        </category>
        <category name="Channels" colour="#AF28B7">
            <block type="on_channelCreate"/>
            <block type="cc_name"/>
            <block type="cc_channel"/>
            <block type="on_channelUpdate"/>
            <block type="cu_name"/>
            <block type="cu_channel"/>
            <block type="on_channelDelete"/>
            <block type="cd_name"/>
            <block type="cd_channel"/>
            <block type="on_channelTopicChange"/>
            <block type="s4d_channel_raw"/>
            <block type="topic"/>
        </category>
        <category name="Scheduled events" colour="#AF88E2">
            <block type="lime_guild_sheduled_events_create"/>
            <block type="lime_guild_sheduled_events_remove"/>
            <block type="lime_scheduled_event_attributes"/>
        </category>
        <category name="Emojis" colour="#147AC3">
            <block type="on_emojicreate"/>
            <block type="ec_name"/>
            <block type="on_emojiupdate"/>
            <block type="eu_name"/>
            <block type="on_emojidelete"/>
            <block type="ed_name"/>
        </category>
        <category name="Roles" colour="#14C36B">
            <block type="on_rolecreate"/>
            <block type="rc_name"/>
            <block type="on_roleupdate"/>
            <block type="ru_name"/>
            <block type="on_roledelete"/>
            <block type="rd_name"/>
        </category>
        <category name="Stickers" colour="#00b3ff">
            <block type="on_stickercreate"/>
            <block type="sc_name"/>
            <block type="on_stickerdelete"/>
            <block type="sd_name"/>
            <block type="on_stickerupdate"/>
            <block type="su_name"/>
        </category>
        <category name="Member Roles" colour="#39A9E3">
            <block type="on_roleadd"/>
            <block type="on_roleremove"/>
            <block type="event-role"/>
            <block type="member_raw"/>
            <block type="member"/>
        </category>
        <category name="Bot Added" colour="#a17722">
            <label text="Blocks for detecting when the bot is added or removed" web-class="boldtext"/>
            <block type="s4d_on_added"/>
            <block type="s4d_on_remove"/>
            <label text="Server information"/>
            <block type="s4d_add_server_id"/>
            <block type="s4d_add_server_name"/>
            <block type="s4d_add_server_icon"/>
            <block type="s4d_add_server_owner"/>
        </category>
        <category name="Boosts" colour="#E545B1">
            <block type="on_boost"/>
            <block type="on_unboost"/>
            <block type="member_raw"/>
            <block type="member"/>
            <sep gap="32"/>
            <block type="on_up"/>
            <block type="on_down"/>
            <block type="event-guild"/>
            <block type="boost"/>
            <sep gap="32"/>
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
            <sep gap="32"/>
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
        <label text="Create a perfect embed" web-class="boldtext" css-container="yourClassName"/>
        <block type="s4d_embed_create"/>
        <block type="s4d_embed_set_color">
            <value name="COLOUR">
                <shadow type="colour_picker">
                    <field name="COLOUR">#6666cc</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_embed_set_author">
            <value name="AUTHOR">
                <block type="s4d_member_username">
                    <field name="s4d_member_username"/>
                </block>
            </value>
        </block>
        <block type="s4d_embed_set_title">
            <value name="TITLE">
                <shadow type="text">
                    <field name="TEXT">Some title</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_embed_set_desc">
            <value name="DESC">
                <shadow type="text">
                    <field name="TEXT">Some desc here...</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_embed_set_thumb">
            <value name="THUMB">
                <shadow type="text">
                    <field name="TEXT">https://image.com</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_embed_add_field">
            <value name="TITLE">
                <shadow type="text">
                    <field name="TEXT">Some field title</field>
                </shadow>
            </value>
            <value name="DESCRIPTION">
                <shadow type="text">
                    <field name="TEXT">Some desc here...</field>
                </shadow>
            </value>
            <value name="INLINE">
                <shadow type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_embed_set_image">
            <value name="IMAGE">
                <shadow type="text">
                    <field name="TEXT">https://image.com</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_embed_set_footer">
            <value name="FOOTER">
                <shadow type="text">
                    <field name="TEXT">Some footer text here...</field>
                </shadow>
            </value>
        </block>
        <label text="Custom date format: MM-DD-YYYY" web-class="boldtext"/>
        <block type="s4d_embed_set_timestamp"/>
        <label text="Send a perfect embed (use with reply bl)" web-class="boldtext"/>
        <block type="s4d_embed_send"/>
    </category>
    <category name="Interactions" colour="#c847ff">
        <category name="Slash" colour="#c847ff">
            <label text="⚠️ Deletes commands set by &quot;Slash Command GUI&quot;! ⚠️"/>
            <label text="Only one &quot;Create slash commands&quot; block should be placed."/>
            <label text="Otherwise, it will break!"/>
            <label text="You also need to invite your bot with applications.commands enabled!" web-class="boldtext"/>
            <block type="frost_slash_register"/>
            <block type="frost_slash_command">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
            </block>
            <block type="gsa_frost_slash_options">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT"/>
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
                        <field name="TEXT"/>
                    </shadow>
                </value>
                <value name="OPTION_NAME">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
            </block>
            <label text="Handling slash commands:"/>
            <block type="on_slash"/>
            <block type="interaction_name"/>
            <block type="interaction_author"/>
            <block type="interaction_channel"/>
            <block type="interaction_guild"/>
            <block type="interaction_voice_channel"/>
            <block type="interaction_voice_channel_id"/>
            <block type="bot_voice_channel_id"/>
            <block type="options">
                <mutation mode="string"/>
            </block>
            <block type="fz_attachment_info"/>
            <block type="fz_attachment_info2"/>
            <block type="slash_reply"/>
            <block type="slash_edit"/>
            <block type="jg_messages_files_send_reply_with_file_and_message_with_button_row_as_hidden"/>
            <label text="Send an embed in slash"/>
            <label text="(for named embeds, the name has to be just called embed)"/>
            <block type="send_m_embed_string"/>
            <sep gap="32"/>
        </category>
        <category name="Buttons" colour="#c847ff">
            <category name="AHQ" colour="#c847ff">
                <label text="Buttons" web-class="boldtext"/>
                <label text="Event" web-class="boldtext"/>
                <block type="on_real_button"/>
                <label text="Button Information" web-class="boldtext"/>
                <block type="id_btn_srv"/>
                <block type="id_btn_ch"/>
                <block type="id_btn_clkr"/>
                <block type="id_btn_ahq"/>
                <label text="Embed Information" web-class="boldtext"/>
                <block type="embed_send_round">
                    <value name="Label">
                        <shadow type="text">
                            <field name="TEXT"/>
                        </shadow>
                    </value>
                </block>
                <label text="Button Actions" web-class="boldtext"/>
                <block type="updte_ahq_button"/>
                <block type="rply_ahq_button"/>
                <label text="Send button" web-class="boldtext"/>
                <block type="snd_ahq_button"/>
                <label text="Button Creation Stuff" web-class="boldtext"/>
                <block type="make_ahq_button"/>
                <block type="style_ahq_button"/>
                <block type="label_ahq_button"/>
                <block type="emoji_ahq_button"/>
                <block type="url_ahq_button"/>
                <block type="d_ahq_button"/>
                <label text="⠀" web-class="boldtext"/>
            </category>
            <category name="Jose" colour="#c847ff">
                <label text="%{BKY_BUTTON_EVENT}"/>
                <block type="s4d_on_click"/>
                <label text="%{BKY_BUTTON_EVENT_BLOCKS}"/>
                <block type="s4d_button_click_id"/>
                <block type="jose_jg_buttons_s4d_button_message"/>
                <block type="s4d_button_think"/>
                <block type="s4d_button_reply"/>
                <block type="s4d_button_edit"/>
                <block type="s4d_button_delete_reply"/>
                <block type="s4d_update"/>
                <label text="%{BKY_BUTTON_BLOCKS}"/>
                <block type="s4d_send_button"/>
                <block type="s4d_button_style"/>
                <block type="s4d_button_row"/>
                <block type="s4d_message_row_block"/>
            </category>
            <category name="MrRedo" colour="#c847ff">
                <label text="Buttons" web-class="boldtext"/>
                <label text="%{BKY_T_EDI}"/>
                <block type="on_button"/>
                <label text="%{BKY_T_BS}"/>
                <block type="button_id"/>
                <block type="button_author"/>
                <block type="button_channel"/>
                <block type="button_guild"/>
                <block type="b_style"/>
                <label text="Reply and edit and send embed"/>
                <block type="b_send_msg"/>
                <block type="button_reply"/>
                <block type="button_edit"/>
                <block type="send_m_embed_string"/>
                <label text="%{BKY_T_CB}"/>
                <block type="b_create">
                    <value name="B_NAME">
                        <shadow type="text">
                            <field name="TEXT">button_name</field>
                        </shadow>
                    </value>
                </block>
                <label text="%{BKY_T_BR}"/>
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
                            <field name="TEXT"/>
                        </shadow>
                    </value>
                </block>
            </category>
        </category>
        <category name="Menus" colour="#c847ff">
            <label text="%{BKY_BUTTON_EVENT}"/>
            <block type="s4d_on_menu_click"/>
            <label text="%{BKY_BUTTON_EVENT_BLOCKS}"/>
            <block type="s4d_menu_value"/>
            <block type="s4d_menu_click_id"/>
            <block type="s4d_menu_reply"/>
            <block type="s4d_button_think"/>
            <block type="s4d_button_edit"/>
            <block type="s4d_button_delete_reply"/>
            <block type="s4d_send_button"/>
            <block type="s4d_update"/>
            <label text="%{BKY_BUTTON_BLOCKS}"/>
            <block type="s4d_button_menu"/>
            <block type="s4d_message_menu_block"/>
        </category>
        <category name="Context Menus" colour="#c847ff">
            <label text="Context menus" web-class="boldtext"/>
            <label text="Register context menu" web-class="boldtext"/>
            <block type="register_c_m"/>
            <block type="register_c_m_g"/>
            <label text="Event" web-class="boldtext"/>
            <block type="on_menu"/>
            <label text="Stuff" web-class="boldtext"/>
            <block type="m_name"/>
            <block type="m_member"/>
            <block type="m_channel"/>
            <block type="m_guild"/>
            <block type="c_options"/>
            <label text="Reply and Edit" web-class="boldtext"/>
            <block type="m_reply"/>
            <block type="m_edit"/>
            <label text="send embed" web-class="boldtext"/>
            <block type="send_m_embed_string"/>
        </category>
        <category name="Forms" colour="#c847ff">
            <category name="ahq Forms" colour="#c847ff">
                <label text="Forms" web-class="boldtext"/>
                <block type="on_real_form"/>
                <block type="embed_send_round">
                    <value name="Label">
                        <shadow type="text">
                            <field name="TEXT"/>
                        </shadow>
                    </value>
                </block>
                <block type="ahq_ahq_ahq_modal"/>
                <label text="Form Info" web-class="boldtext"/>
                <block type="id_form_ahq"/>
                <block type="id_textbox_ahq"/>
                <block type="clkr_form_ahq"/>
                <block type="channel_form_ahq"/>
                <block type="server_form_ahq"/>
                <block type="reply_ahq_modal_text"/>
                <block type="something_modal"/>
                <label text="Make Forms" web-class="boldtext"/>
                <block type="make_ahq_modal"/>
                <block type="make_ahq_modal_text"/>
                <block type="style_ahq_modal"/>
                <label text="Send Forms" web-class="boldtext"/>
                <block type="snd_ahq_modal"/>
                <label text="⠀" web-class="boldtext"/>
            </category>
            <category name="redman13 Forms" colour="#c847ff">
                <label text="use ahq's form blocks for recieve" web-class="boldtext"/>
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
            <label text="Find lyrics for music" web-class="boldtext"/>
            <block type="find_lyric_than"/>
            <block type="lyric"/>
        </category>
        <category name="Music Player" colour="#43d400">
            <label text="Create a perfect music player" web-class="boldtext"/>
            <label text="Made with discord-music-player DMP" web-class="boldtext"/>
            <label text="WARNING DON'T USE WITH JOSE MUSIC BLOCKS" web-class="boldtext"/>
            <label text="Events :D" web-class="boldtext"/>
            <block type="first_track"/>
            <block type="track_start"/>
            <block type="empty"/>
            <block type="kicked"/>
            <block type="queue_error"/>
            <block type="track_added"/>
            <label text="Blocks :D" web-class="boldtext"/>
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
            <label text="Queue info :D" web-class="boldtext"/>
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
            <label text="%{BKY_MUSIC_EVENT}"/>
            <block type="s4d_track_playing"/>
            <block type="s4d_track_added"/>
            <block type="s4d_queue_finished"/>
            <label text="%{BKY_MUSIC_INFO}"/>
            <block type="s4d_track_name"/>
            <block type="s4d_track_channel"/>
            <block type="s4d_track_url"/>
            <block type="s4d_track_author"/>
            <block type="s4d_track_thumbnail"/>
            <block type="s4d_track_views"/>
            <block type="s4d_track_duration"/>
            <label text="%{BKY_MUSIC_BLOCKS}"/>
            <block type="s4d_bot_voice_channel"/>
            <block type="s4d_voice_channel"/>
            <block type="s4d_voice_channel_id"/>
            <block type="s4d_get_queue"/>
            <block type="s4d_playing"/>
            <block type="s4d_current_track"/>
            <block type="s4d_connected"/>
            <block type="s4d_search"/>
            <block type="s4d_loop"/>
            <block type="s4d_volume"/>
            <block type="s4d_back"/>
            <block type="s4d_resume"/>
            <block type="s4d_pause"/>
            <block type="s4d_stop"/>
            <block type="s4d_skip"/>
            <block type="s4d_play"/>
            <block type="s4d_create_queue"/>
            <block type="s4d_connect"/>
        </category>
    </category>
    <sep class="bt"/>
    <category name="Servers" colour="#D85E47">
        <label text="%{BKY_FIND_SERVER}"/>
        <block type="s4d_get_server"/>
        <block type="s4d_get_all_server"/>
        <block type="s4d_get_all_server_server"/>
        <label text="%{BKY_LABEL_SERVER_INFOS}"/>
        <block type="server_attributes"/>
        <block type="s4d_server_name"/>
        <block type="s4d_member_count"/>
        <block type="s4d_icon_url"/>
        <block type="s4d_server_id"/>
        <block type="s4d_boost_level"/>
        <block type="s4d_server_owner"/>
        <block type="s4d_server_created_at"/>
        <block type="s4d_number_of__server"/>
        <label text="Bot server actions"/>
        <block type="s4d_leave_server"/>
        <label text="%{BKY_LABEL_MODIFY_SERVER}"/>
        <block type="s4d_set_server_name"/>
        <block type="set_server_something">
            <value name="reason">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="explicit_content_filter"/>
        <block type="default_notif_lvl"/>
        <block type="set_verification_level"/>
        <label text="Server audit logs"/>
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
        <label text="Create Servers"/>
        <block type="monaco_create_server"/>
        <block type="monaco_created_guild"/>
        <label text="Delete a server (only if the bot is the owner)"/>
        <block type="monaco_delete_guild"/>
        <sep gap="32"/>
    </category>
    <category name="Channels" colour="#a55b80">
        <label text="Find a channel"/>
        <block type="s4d_get_channel"/>
        <block type="jg_monaco_channels_get_channel_number_from_server">
            <value name="INDEX">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_get_all_channel"/>
        <block type="s4d_get_all_channel_channel"/>
        <block type="get_all_channel_channel_name"/>
        <block type="jg_alex_channels_first_channel_in_server"/>
        <block type="frost_category_get"/>
        <label text="Send a message in the found channel"/>
        <block type="s4d_send_channel"/>
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
        <label text="Channel Info"/>
        <block type="frost_channel_types">
            <value name="Channel">
                <shadow type="s4d_message_channel"/>
            </value>
        </block>
        <block type="s4d_channel_ahq_name"/>
        <block type="s4d_channel_id"/>
        <block type="monaco_position_of_channel"/>
        <block type="s4d_channel_guild_id"/>
        <block type="s4d_channel_parent_id"/>
        <block type="s4d_channel_message_id"/>
        <block type="s4d_channel_topic"/>
        <block type="monaco_slowmode_of_channel"/>
        <block type="s4d_channel_exist"/>
        <block type="s4d_is_channel_nsfw"/>
        <block type="frost_category_id"/>
        <label text="Finding content in the channel"/>
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
        <label text="Forms"/>
        <block type="s4d_send_wait_reply">
            <value name="CONTENT">
                <shadow type="text">
                    <field name="TEXT">What is your name?</field>
                </shadow>
            </value>
            <value name="TIME">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_send_wait_reply_value"/>
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
        <label text="Actions on messages in the channel"/>
        <block type="s4d_purge">
            <value name="AMOUNT">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <label text="Channel Actions"/>
        <block type="s4d_create_channel"/>
        <block type="create_category_then"/>
        <block type="fz_channel"/>
        <block type="frost_created_cat"/>
        <block type="s4d_delete_channel"/>
        <block type="monaco_set_channel_position"/>
        <label text="Actions for the channel"/>
        <block type="monaco_set_channel_nsfw"/>
        <block type="monaco_toggle_follow_channel"/>
        <block type="renamec"/>
        <block type="channel_perms"/>
        <block type="set_perms_parent"/>
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
        <label text="Voice channel events"/>
        <block type="voice_event"/>
        <block type="voice_switch"/>
        <block type="voice_leave"/>
        <label text="Voice channel Information"/>
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
        <label text="Voice channel actions"/>
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
        <label text="Discord Voice Activites (aka, Discord Together!)"/>
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
        <sep gap="32"/>
    </category>
    <category name="Roles" colour="#2EB66B">
        <label text="%{BKY_FIND_ROLE}"/>
        <block type="s4d_get_role"/>
        <block type="s4d_get_all_role"/>
        <block type="s4d_get_all_role_role"/>
        <block type="jg_roles_get_all_member_roles_then_for_each_do"/>
        <block type="jg_roles_get_all_member_roles_then_for_each_do_role"/>
        <block type="gsa_get_all_roles_on_member"/>
        <block type="hig_role"/>
        <label text="%{BKY_ROLE_ASSIGNMENT}"/>
        <block type="fz_role_info_text"/>
        <block type="fz_role_info_num"/>
        <block type="monaco_get_role_on_position"/>
        <block type="fz_role_info_bool"/>
        <block type="fz_role_info_color"/>
        <block type="s4d_add_role">
            <value name="MEMBER">
                <shadow type="s4d_message_member"/>
            </value>
        </block>
        <block type="s4d_remove_role">
            <value name="MEMBER">
                <shadow type="s4d_message_member"/>
            </value>
        </block>
        <block type="s4d_delete_role"/>
        <block type="monaco_delete_role"/>
        <block type="monaco_set_role_position"/>
        <block type="s4d_has_role"/>
        <block type="role_has_permission"/>
        <block type="reset_role_perms"/>
        <block type="s4d_role_exist"/>
        <block type="s4d_create_role"/>
        <block type="gsa_jg_create_role_with_name_in_server_with_color_then_do"/>
        <block type="gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role"/>
        <block type="s4d_set_role_perm"/>
        <block type="role_color"/>
        <block type="role_name"/>
        <block type="jg_monaco_roles_hoist_role"/>
        <block type="jg_monaco_roles_change_role_to_be_mentionable_with_reason"/>
        <block type="set_role_icon"/>
        <label text="Caching roles"/>
        <block type="jg_roles_fetch_all_roles_in_server_then_do"/>
        <sep gap="32"/>
    </category>
    <category name="Members" colour="#187795">
        <label text="%{BKY_FIND_MEMBER}"/>
        <block type="s4d_get_member"/>
        <block type="jg_members_get_member_by_id">
            <value name="ID">
                <shadow type="text">
                    <field name="TEXT">12345</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_get_all"/>
        <block type="s4d_get_all_member"/>
        <block type="ahq_members_get_random_member_in_server"/>
        <label text="%{BKY_MEMBER_INFORMATIONS}"/>
        <block type="s4d_member_exist"/>
        <block type="s4d_member_id"/>
        <block type="s4d_member_discriminator"/>
        <block type="s4d_member_tag"/>
        <block type="ahq_presence"/>
        <block type="s4d_member_username"/>
        <block type="jg_members_member_has_nickname"/>
        <block type="jg_members_member_s_nickname"/>
        <block type="s4d_member_icon"/>
        <block type="gsa_get_user_banner_but_member_is_user_rn"/>
        <block type="s4d_member_dynamic_icon"/>
        <block type="s4d_joined_at"/>
        <block type="s4d_created_at"/>
        <block type="s4d_member_is_bot"/>
        <block type="jg_monaco_members_member_is_timed_out"/>
        <label text="These blocks only work if a member is timed out."/>
        <block type="monaco_member_timeout_until"/>
        <block type="monaco_member_timeout_until_timestamp"/>
        <label text="Information about a Server Member (6 options)"/>
        <block type="jg_members_member_is_value"/>
        <label text="Blocks for users"/>
        <block type="jg_member_is_user_in_server"/>
        <block type="jg_members_user_exactly_equals_user"/>
        <label text="Information about a User (20 options)"/>
        <block type="jg_members_user_has_value"/>
        <label text="Server info about a member"/>
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
        <label text="This will detect the color of highest role" web-class="boldtext"/>
        <block type="member_color"/>
        <label text="Bot information on members or users"/>
        <block type="jg_members_new_list_of_known_ids"/>
        <label text="%{BKY_LABEL_MEMBER_ACTIONS}"/>
        <block type="mute_ahq"/>
        <block type="jg_monaco_members_remove_timeout_from_member"/>
        <block type="s4d_kick_member"/>
        <block type="s4d_ban_member"/>
        <block type="s4d_unban_member"/>
        <block type="monaco_expanded_punishments"/>
        <block type="s4d_send_member"/>
        <block type="s4d_set_member_nickname"/>
        <label text="Member action events"/>
        <block type="banned_event"/>
        <block type="banned_objects"/>
        <block type="unbanned_event"/>
        <block type="unbanned_objects"/>
        <block type="lime_kick_event"/>
        <block type="lime_kicked_member_info_attributes"/>
        <label text="%{BKY_FORMS}"/>
        <block type="s4d_send_wait_reply_dm"/>
        <block type="s4d_send_wait_reply_dm_value"/>
        <sep gap="32"/>
    </category>
    <category name="Emojis" colour="#347dfa" hidden="false">
        <label text="Create/Fetch Emojis"/>
        <block type="fz_get_emoji"/>
        <block type="fz_create_emoji"/>
        <block type="fz_get_all_emoji"/>
        <block type="fz_get_all_emoj"/>
        <label text="Read Emojis"/>
        <block type="fz_emoji_info"/>
        <block type="fz_emoji_animated"/>
        <block type="fz_emoji_exist"/>
        <label text="Actions on Emojis"/>
        <block type="fz_lock_emoji"/>
        <block type="fz_unlock_emoji"/>
        <block type="fz_delete_emoji"/>
        <label text="Detect Emojis in text" web-class="boldtext"/>
        <block type="jg_emoji_text_regex_list_of_normal_emojis_in_text"/>
        <block type="jg_emoji_text_regex_list_of_custom_emojis_in_text"/>
        <block type="jg_emoji_text_regex_list_of_animated_emojis_in_text"/>
        <sep gap="32"/>
    </category>
    <category name="Stickers" colour="#02a836">
        <block type="create_sticker"/>
        <block type="get_sticker"/>
        <block type="delete_sticker"/>
        <block type="sticker_exist"/>
        <block type="send_sticker"/>
        <block type="info_of_sticker"/>
    </category>
    <category name="Invites" colour="#5abced">
        <label text="Create Invites"/>
        <block type="new_invite"/>
        <block type="invite_ur"/>
        <label text="Fetch Invites"/>
        <block type="monaco_all_invites"/>
        <block type="monaco_invites_channels"/>
        <block type="monaco_invite_with_code"/>
        <label text="Delete Invites"/>
        <block type="monaco_delete_invite"/>
        <label text="Invite Events"/>
        <label text="On member joined"/>
        <block type="userinvited"/>
        <block type="Member"/>
        <block type="InviteMember"/>
        <block type="Server"/>
        <block type="Amount"/>
        <label text="On member leaved"/>
        <block type="UserLeave"/>
        <block type="Member"/>
        <block type="InviteMember"/>
        <block type="Server"/>
        <block type="Amount"/>
        <label text="Extras"/>
        <block type="get_member_invites"/>
    </category>
    <sep class="bt"/>
    <category name="Websites" colour="#4C97FF">
        <category name="Dashboard" colour="#4C93FF">
            <label text="Initialize a new dashboard"/>
            <block type="initialize_dashboard"/>
            <label text="[OPTIONAL] Cookies"/>
            <block type="new_session_obj">
                <value name="secure">
                    <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </block>
                </value>
                <value name="httpOnly">
                    <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </block>
                </value>
                <value name="resave">
                    <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </block>
                </value>
                <value name="saveUninitialized">
                    <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </block>
                </value>
            </block>
            <block type="random_sekret"/>
            <label text="Add inputs"/>
            <block type="add_text_input"/>
            <block type="add_boolean_input"/>
            <block type="add_dropdown_input"/>
            <block type="new_couple"/>
            <block type="add_color_input"/>
            <label text="[OPTIONAL] Commands page tab"/>
            <block type="add_command_dash">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">ping</field>
                    </shadow>
                </value>
                <value name="DESC">
                    <shadow type="text">
                        <field name="TEXT">Get bot's ping</field>
                    </shadow>
                </value>
                <value name="tutorial">
                    <shadow type="text">
                        <field name="TEXT">!ping</field>
                    </shadow>
                </value>
            </block>
            <label text="Variables"/>
            <block type="dash_guild_id"/>
            <block type="dash_value"/>
        </category>
        <category name="Creation" colour="#4c8eff">
            <block type="jg_express_start_website_then_using_port"/>
            <block type="jg_express_website_on_page_on_request_type_do">
                <value name="PAGE">
                    <shadow type="text">
                        <field name="TEXT">/</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_express_website_on_invalid_request_do"/>
            <block type="jg_express_website_set_content_type_to"/>
            <block type="jg_express_website_set_response_status_code_to">
                <value name="STATUS">
                    <shadow type="math_number">
                        <field name="NUM">200</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_express_website_respond_with_text">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
            </block>
            <block type="gsa_express_website_respond_with_buffer">
                <value name="buffer">
                    <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                        <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                    </block>
                </value>
            </block>
            <block type="jg_express_website_respond_with_file">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">index.html</field>
                    </shadow>
                </value>
            </block>
            <block type="jg_express_website_respond_with_object">
                <value name="OBJECT">
                    <shadow type="jg_objects_create_new"/>
                </value>
            </block>
            <block type="jg_express_website_set_header_to">
                <value name="HEADER">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
            </block>
            <block type="jg_express_website_query_item_parameter">
                <value name="ITEM">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
            </block>
            <block type="jg_express_website_post_request_item">
                <value name="ITEM">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="Requests" colour="#4c8bff">
            <category name="Simple" colour="#4c79ff">
                <label text="Want to do cool things with json requests? Check out PooPoo API" web-class="boldtext"/>
                <label text="https://poopoo-api.vercel.app/" web-class="boldtext"/>
                <block type="s4d_http_get_then"/>
                <block type="s4d_get_string_of_data"/>
                <block type="jg_imghttps"/>
                <label text="For geting buffer data from a website" web-class="boldtext"/>
                <block type="gsa_http_get_buffer_then"/>
                <block type="gsa_get_https_response_buffer"/>
            </category>
            <category name="Advanced" colour="#4c6aff">
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
    </category>
    <category name="Applications" colour="#4c79ff">
        <category name="Minecraft" colour="110">
            <category name="Java" colour="120">
                <label text="Start by grabbing the server to get data from." web-class="boldtext"/>
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
                <label text="The blocks below will get data from the server." web-class="boldtext"/>
                <block type="jg_minecraft_java_motd"/>
                <block type="jg_minecraft_java_players"/>
                <block type="jg_minecraft_java_version"/>
                <block type="jg_minecraft_java_data"/>
                <label text="The blocks below will only work if the server has enabled query." web-class="boldtext"/>
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
                <label text="Run operator commands on your Minecraft Java server." web-class="boldtext"/>
                <label text="You'll need to enable and setup RCON on your server for these to work." web-class="boldtext"/>
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
                <label text="Start by grabbing the server to get data from." web-class="boldtext"/>
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
                <label text="The blocks below will get data from the server." web-class="boldtext"/>
                <block type="jg_minecraft_bedrock_motd"/>
                <block type="jg_minecraft_bedrock_players"/>
                <block type="jg_minecraft_bedrock_server_info"/>
                <block type="jg_minecraft_bedrock_version"/>
                <block type="jg_minecraft_bedrock_edition"/>
                <block type="jg_minecraft_bedrock_data"/>
            </category>
        </category>
        <category name="Roblox" colour="0">
            <label text="Version 1.1 of Roblox Blocks" web-class="boldtext"/>
            <label text="User info" web-class="boldtext"/>
            <block type="jg_roblox_get_user_id_from_username"/>
            <block type="jg_roblox_user_id"/>
            <block type="jg_roblox_get_user_info"/>
            <block type="jg_roblox_user_info"/>
            <block type="jg_roblox_get_user_thumbnail"/>
            <block type="jg_roblox_user_thumbnail_info"/>
            <block type="jg_roblox_U2_get_users_avatar_asset_ids"/>
            <block type="jg_roblox_U2_users_avatar_asset_ids"/>
            <label text="Groups" web-class="boldtext"/>
            <block type="jg_roblox_get_user_group"/>
            <block type="jg_roblox_group_info"/>
            <block type="jg_roblox_get_group_icon"/>
            <block type="jg_roblox_group_icon"/>
            <block type="jg_roblox_get_user_group_rank"/>
            <block type="jg_roblox_user_group_rank"/>
            <label text="Blocks that require login" web-class="boldtext"/>
            <label text="You will need to get your .ROBLOSECURITY cookie for these." web-class="boldtext"/>
            <label text="You can probably find tutorials online, but make sure to hide the cookie once you have it." web-class="boldtext"/>
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
            <label text="The blocks below are marked with a star to show they need a login." web-class="boldtext"/>
            <block type="jg_roblox_U2_currently_logged_in_users"/>
            <block type="jg_roblox_U2_wear_list_of_assets"/>
            <block type="jg_roblox_U2_set_avatar_type"/>
            <block type="jg_roblox_U2_remove_asset_id_from_avatar"/>
            <block type="jg_roblox_U2_accept_friend_request"/>
            <block type="jg_roblox_U2_decline_friend_request"/>
            <block type="jg_roblox_U2_decline_all_friend_requests"/>
            <block type="jg_roblox_U2_block_user"/>
            <block type="jg_roblox_U2_unblock_user"/>
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
            <label text="Github" web-class="boldtext"/>
            <block type="github_get_then"/>
            <label text="For profile" web-class="boldtext"/>
            <block type="github_what_stat"/>
            <label text="" web-class="boldtext"/>
            <label text="" web-class="boldtext"/>
            <label text="Scratch" web-class="boldtext"/>
            <block type="scratch_get_about_then"/>
            <block type="scratch_about_user"/>
        </category>
        <category name="CloudConvert" colour="#3333ff">
            <label text="API starter" web-class="boldtext"/>
            <block type="convert_api_code"/>
            <label text="Main blocks" web-class="boldtext"/>
            <block type="convert_api_task"/>
            <block type="save_api_code"/>
            <block type="convert_api_file"/>
            <block type="send_ahq_converted"/>
            <label text="Resources" web-class="boldtext"/>
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
        <category name="Charts" colour="#ffa500">
            <label text="Chart Blocks"/>
            <block type="create_chart"/>
            <block type="send_chart"/>
        </category>
        <category name="Message Games" colour="#5ba58b">
            <label text="Akinator gamemodes: character, animal, object" web-class="boldtext"/>
            <block type="Akinator">
                <value name="MESSAGE">
                    <shadow type="aki_gametype"/>
                </value>
            </block>
            <block type="s4d_snake"/>
            <block type="snake_js"/>
            <block type="s4d_cal"/>
            <label text="Tic Tac Toe game FROM MESSAGE"/>
            <block type="tictactoe">
                <value name="emb_title">
                    <shadow type="text">
                        <field name="TEXT">Tic Tac Toe</field>
                    </shadow>
                </value>
                <value name="gover_title">
                    <shadow type="text">
                        <field name="TEXT">Game Over</field>
                    </shadow>
                </value>
                <value name="color">
                    <shadow type="text">
                        <field name="TEXT">#5865F2</field>
                    </shadow>
                </value>
                <value name="oEmoji">
                    <shadow type="text">
                        <field name="TEXT">🔵</field>
                    </shadow>
                </value>
                <value name="xEmoji">
                    <shadow type="text">
                        <field name="TEXT">❌</field>
                    </shadow>
                </value>
                <value name="blankEmoji">
                    <shadow type="text">
                        <field name="TEXT">➖</field>
                    </shadow>
                </value>
                <value name="waitMessage">
                    <shadow type="text">
                        <field name="TEXT">Waiting for the opponent...</field>
                    </shadow>
                </value>
                <value name="turnMessage">
                    <shadow type="text">
                        <field name="TEXT">{emoji} | Its now **{player}** turn!</field>
                    </shadow>
                </value>
                <value name="askMessage">
                    <shadow type="text">
                        <field name="TEXT">Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!</field>
                    </shadow>
                </value>
                <value name="cancelMessage">
                    <shadow type="text">
                        <field name="TEXT">Looks like they refused to have a game of Tic Tac Toe. :(</field>
                    </shadow>
                </value>
                <value name="timeEndMessage">
                    <shadow type="text">
                        <field name="TEXT">Since the opponent didnt answer, i dropped the game!</field>
                    </shadow>
                </value>
                <value name="drawMessage">
                    <shadow type="text">
                        <field name="TEXT">It was a draw!</field>
                    </shadow>
                </value>
                <value name="winMessage">
                    <shadow type="text">
                        <field name="TEXT">{emoji} | **{winner}** won the game!</field>
                    </shadow>
                </value>
                <value name="gameEndMessage">
                    <shadow type="text">
                        <field name="TEXT">The game went unfinished :(</field>
                    </shadow>
                </value>
            </block>
            <label text="Tic Tac Toe game FROM SLASH COMMAND"/>
            <block type="slash_tictactoe">
                <value name="emb_title">
                    <shadow type="text">
                        <field name="TEXT">Tic Tac Toe</field>
                    </shadow>
                </value>
                <value name="gover_title">
                    <shadow type="text">
                        <field name="TEXT">Game Over</field>
                    </shadow>
                </value>
                <value name="color">
                    <shadow type="text">
                        <field name="TEXT">#5865F2</field>
                    </shadow>
                </value>
                <value name="oEmoji">
                    <shadow type="text">
                        <field name="TEXT">🔵</field>
                    </shadow>
                </value>
                <value name="xEmoji">
                    <shadow type="text">
                        <field name="TEXT">❌</field>
                    </shadow>
                </value>
                <value name="blankEmoji">
                    <shadow type="text">
                        <field name="TEXT">➖</field>
                    </shadow>
                </value>
                <value name="waitMessage">
                    <shadow type="text">
                        <field name="TEXT">Waiting for the opponent...</field>
                    </shadow>
                </value>
                <value name="turnMessage">
                    <shadow type="text">
                        <field name="TEXT">{emoji} | Its now **{player}** turn!</field>
                    </shadow>
                </value>
                <value name="askMessage">
                    <shadow type="text">
                        <field name="TEXT">Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!</field>
                    </shadow>
                </value>
                <value name="cancelMessage">
                    <shadow type="text">
                        <field name="TEXT">Looks like they refused to have a game of Tic Tac Toe. :(</field>
                    </shadow>
                </value>
                <value name="timeEndMessage">
                    <shadow type="text">
                        <field name="TEXT">Since the opponent didnt answer, i dropped the game!</field>
                    </shadow>
                </value>
                <value name="drawMessage">
                    <shadow type="text">
                        <field name="TEXT">It was a draw!</field>
                    </shadow>
                </value>
                <value name="winMessage">
                    <shadow type="text">
                        <field name="TEXT">{emoji} | **{winner}** won the game!</field>
                    </shadow>
                </value>
                <value name="gameEndMessage">
                    <shadow type="text">
                        <field name="TEXT">The game went unfinished :(</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="OpenAI" colour="#a85700">
            <label text="OpenAI"/>
            <block type="login_openai">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">Your bot key</field>
                    </shadow>
                </value>
            </block>
            <block type="generate_image_openai"/>
            <block type="text_completion_openai" />
        </category>
    </category>
    <category name="Securing" colour="#4c61ff">
        <label text="Output blocks" web-class="boldtext"/>
        <label text="Securing text" web-class="boldtext"/>
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
        <label text="Encoding text" web-class="boldtext"/>
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
    </category>
    <sep class="bt"/>
    <category name="Files" colour="#faaf00">
        <category name="Text" colour="#fa9e00">
            <block type="jg_file_create"/>
            <block type="jg_file_contents"/>
            <block type="jg_file_extension"/>
            <block type="jg_file_metadata"/>
            <block type="jg_file_foreachfile"/>
            <block type="jg_file_foreachfileinput"/>
            <block type="gsa_fs_write_buffer"/>
            <block type="frost_fs_read">
                <statement name="THEN">
                    <block type="controls_if">
                        <value name="IF0">
                            <block type="frost_other_err"/>
                        </value>
                        <statement name="DO0">
                            <block type="s4d_print">
                                <value name="PRINT">
                                    <block type="frost_other_err"/>
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
                            <block type="frost_other_err"/>
                        </value>
                        <statement name="DO0">
                            <block type="s4d_print">
                                <value name="PRINT">
                                    <block type="frost_other_err"/>
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
                            <block type="frost_other_err"/>
                        </value>
                        <statement name="DO0">
                            <block type="s4d_print">
                                <value name="PRINT">
                                    <block type="frost_other_err"/>
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
                            <block type="frost_other_err"/>
                        </value>
                        <statement name="DO0">
                            <block type="s4d_print">
                                <value name="PRINT">
                                    <block type="frost_other_err"/>
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
                            <block type="frost_other_err"/>
                        </value>
                        <statement name="DO0">
                            <block type="s4d_print">
                                <value name="PRINT">
                                    <block type="frost_other_err"/>
                                </value>
                            </block>
                        </statement>
                    </block>
                </statement>
            </block>
            <label text="For open and read (Gives the contents of the file)"/>
            <block type="frost_fs_data"/>
            <sep gap="32"/>
        </category>
        <category name="Data" colour="#fa9200">
            <block type="jg_web_currentdata"/>
            <block type="jg_web_valueofkey"/>
            <block type="jg_web_keywithvalue"/>
            <block type="jg_web_valueofflkey"/>
            <block type="jg_web_haskey"/>
            <block type="jg_web_allkey"/>
            <block type="jg_web_allval"/>
            <block type="jg_web_keycount"/>
            <block type="jg_web_keynumber"/>
            <label text="Loops" web-class="boldtext"/>
            <block type="jg_web_foreachkey"/>
            <block type="jg_web_foreachkeyinput"/>
        </category>
        <category name="Images" colour="#fa8100">
            <category name="Image Editing" colour="#e67600">
                <label text="Creating / Editing an image" web-class="boldtext"/>
                <label text="Getting started" web-class="boldtext"/>
                <block type="gsa_create_new_jimp_image"/>
                <block type="jg_beginJimp"/>
                <block type="jg_saveJimpageAs"/>
                <block type="gsa_get_jimp_image_buffer"/>
                <block type="gsa_get_jimp_image_buffer_value"/>
                <label text="Effects and extras" web-class="boldtext"/>
                <block type="jg_jimp_drawtext"/>
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
                <label text="Generating simple effects" web-class="boldtext"/>
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
                <label text="Captchas" web-class="boldtext"/>
                <block type="create_captcha"/>
                <block type="captcha_image"/>
                <block type="captcha_value"/>
                <block type="send_captcha"/>
            </category>
            <category name="Member Cards" colour="#a85700">
                <label text="Send any created card"/>
                <block type="s4d_send_in_channel"/>
                <label text="Welcome card"/>
                <block type="s4d_create_welcome_then"/>
                <block type="s4d_set_username"/>
                <block type="s4d_set_member_count"/>
                <block type="s4d_set_discriminator"/>
                <block type="s4d_set_background"/>
                <block type="s4d_set_avatar"/>
                <block type="s4d_set_guild_name"/>
                <block type="s4d_set_color"/>
                <label text="Goodbye card"/>
                <block type="s4d_create_goodbye_then"/>
                <block type="s4d_set_username"/>
                <block type="s4d_set_member_count"/>
                <block type="s4d_set_discriminator"/>
                <block type="s4d_set_background"/>
                <block type="s4d_set_avatar"/>
                <block type="s4d_set_guild_name"/>
                <block type="s4d_set_color"/>
                <label text="Rank card"/>
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
    </category>
    <category name="Databases" colour="#2AC395">
        <category name="JSON" colour="#F1DA54">
            <label text="Simplest database"/>
            <label text="Create a new database name and file"/>
            <block type="gsa_make_db_with_path_x"/>
            <block type="s4d_database_create_new">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
                <value name="FILE">
                    <shadow type="text">
                        <field name="TEXT">database</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_LABEL_READ_DB}"/>
            <block type="s4d_get_data_new">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_has_data_new">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_get_all_data_new">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_LABEL_UPDATE_DB}"/>
            <block type="s4d_set_data_new">
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
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_push_data_new">
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
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete_data_new">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_add_data_new">
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
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_subtract_data_new">
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
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete_all_data_new">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">database1</field>
                    </shadow>
                </value>
            </block>
            <sep gap="32"/>
        </category>
        <category name="MongoDB" colour="#0db550">
            <label text="connect to MongoDB"/>
            <block type="mongo_on"/>
            <block type="mongo_connect">
                <value name="URL">
                    <shadow type="text">
                        <field name="TEXT">mongodb url</field>
                    </shadow>
                </value>
            </block>
            <label text="nerd blocks"/>
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
        <category name="SQLite" colour="#A025DE">
            <label text="%{BKY_LABEL_READ_DB}"/>
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
            <label text="%{BKY_LABEL_UPDATE_DB}"/>
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
        <category name="Replit" colour="#150b91">
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
    </category>
    <sep class="bt"/>
    <category name="Comments" colour="#DDAA00">
        <label text="Comments allow you to explain what your blocks do."/>
        <label text="You can add comments onto specific blocks by going on a block, then Right Click > Add Comment"/>
        <label text="However, these floating comments allow you to place them anywhere and be always visible!"/>
        <block type="jg_unused_floating_comment">
            <field name="TEXT">This is a floating comment,&amp;#10;with new lines too!</field>
        </block>
        <block type="jg_comments_floating_arrow"/>
        <block type="jg_comments_floating_image">
            <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
        </block>
        <label text="If you want a connected comment but always visible..."/>
        <block type="jg_comments_connected_comment">
            <field name="TEXT">This is a connected comment,&amp;#10;but it'll always be visible!</field>
        </block>
        <block type="jg_comments_connected_arrow"/>
        <block type="jg_comments_connected_image">
            <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
        </block>
    </category>
</xml>
`
}
