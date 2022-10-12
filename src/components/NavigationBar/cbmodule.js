const Blockly = require("blockly")
const localforage = require("localforage")
const registered = {}
function handle(block) {
    const returning = { value: '' }
    eval(registered[block.type].code)
    return returning.value
}
module.exports.bypassStrictModeRegister = (name, code) => {
    registered[name] = { code: code }
    Blockly.JavaScript[name] = handle
}
module.exports.createCustomBlockID = (name) => {
    let customId = ""
    const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_"]
    for (let i = 0; i < 50; i++) {
        customId += chars[Math.round(Math.random() * (chars.length - 1))]
    }
    return "s4dcb_RESERVEDFORCUSTOMS_" + customId + "_" + String(name).replace(/[^a-zA-Z0-9]/gmi, "")
}
module.exports.stringToCustomBlockData = (str) => {
    return {
        blocks: String(str).substring(0, String(str).indexOf('_ \\COPY_ABOVE FUNCTIONS and VARIABLES\\ _')) + String(str).substring(String(str).indexOf("_ \\INIT FUNC\\ _") + 15, String(str).indexOf("_ \\END INIT FUNC\\ _") - 1),
        javascript: String(str).substring(0, String(str).indexOf('_ \\COPY_ABOVE FUNCTIONS and VARIABLES\\ _')) + String(str).substring(String(str).indexOf("_ \\JS FUNC\\ _") + 13, String(str).indexOf("_ \\END JS FUNC\\ _") - 1)
    }
}
module.exports.createCustomBlock = (name, data) => {
    data.name = name
    let works = true;
    try {
        Blockly.Blocks[name] = {
            init: function () {
                eval(data.blocks);
            },
        };
        module.exports.bypassStrictModeRegister(name, data.javascript);
    } catch (err) {
        console.warn(
            "An error occurred when loading a custom block!",
            String(err).substring(0, 250)
        );
        works = false;
    } finally {
        if (works) {
            window.customBlocks.push(name);
            window.saveCustomBlocksOutput.push(data);
        }
    }
    localforage.setItem(
        "autosave_customBlocks",
        JSON.stringify(window.saveCustomBlocksOutput)
    );
    window.loadtoolltovobocaopjsd9fuw4fpoewjoiphgf9ewpojndsfoihgew8ninjagoLOllioolo2222222222222();
}
// register custom block builder blocks
const prefix = "jg_s4d_customBlocks_builder1_"
const color = 120
require("./cbblocks").load(Blockly, prefix, color)
// toolbox
module.exports.toolbox = `
<xml>
    <category name="Logic" colour="#5b80a5">
        <block type="controls_if"/>
        <block type="logic_compare"/>
        <block type="logic_operation"/>
        <block type="logic_negate"/>
        <block type="logic_boolean"/>
        <block type="logic_null"/>
        <block type="logic_ternary"/>
        <block type="s4d_lasercat_switch_switch"/>
        <block type="lasercat_jg_case_default"/>
    </category>
    <category name="Loops" colour="#5ba55b">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">3</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil"/>
        <block type="controls_for">
            <field name="VAR">i</field>
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
            <field name="VAR">list</field>
        </block>
        <block type="controls_flow_statements"/>
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
    </category>
    <category name="Text" colour="#5ba58c">
        <block type="text"/>
		<block type="text_multiline"/>
        <block type="text_join">
            <mutation items="2"/>
        </block>
        <block type="text_replace">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>               
        </block>
		<block type="text_isEmpty"/>
		<block type="text_reverse"/>
        <block type="s4d_newline"></block>
        <block type="text_append">
            <field name="VAR">item</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"/>
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
        <block type="text_length">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">abc</field>
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
                    <field name="VAR">text</field>
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
                    <field name="VAR">text</field>
                </block>
            </value>
        </block>
        <block type="text_getSubstring">
            <mutation at1="true" at2="true" />
            <field name="WHERE1">FROM_START</field>
            <field name="WHERE2">FROM_START</field>
            <value name="STRING">
                <block type="variables_get">
                    <field name="VAR">text</field>
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
        <block type="jg_text_regex_create_new_regex_of"/>
        <block type="jg_lists_regex_list_of_matches_from_regex_on_text"/>
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
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getIndex">
            <mutation statement="false" at="true"/>
            <field name="MODE">GET</field>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_setIndex">
            <mutation at="true" />
            <field name="MODE">SET</field>
            <field name="WHERE">FROM_START</field>
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getSublist">
            <mutation at1="true" at2="true" />
            <field name="WHERE1">FROM_START</field>
            <field name="WHERE2">FROM_START</field>
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="push_to_list">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">list</field>
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
    </category>
    <category name="Colour" colour="#a5745b">
        <block type="colour_picker">
            <field name="COLOUR">#ff0000</field>
        </block>
        <block type="fz_color"/>
        <block type="colour_random"/>
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
    <sep class="bt"/>
    <category name="Variables" colour="#a55b80" custom="VARIABLE"/>
    <category name="Expanded Variables" colour="#9F5B93">
        <label text="Make global/local variables for functions and other stuff"></label>
        <label text="Compatible with variables category"></label>
        <block type="import_all">
            <value name="VAR">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="express_var">
            <value name="VAR">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="blank">
            <field name="TEXT"/>
        </block>
    </category>
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
        <block type="gsa_new_object_creator_empty_search_moment_searchMoment">
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
        <block type="gsa_new_object_item_creator_empty_search_moment_searchMoment">
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
        <label text="For something like getting the amount of keys in an object..." web-class="boldtext"></label>
        <block type="jg_objects_get_objects_key_names_in_list">
            <value name="OBJECT">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <label text="for working with json" web-class="boldtext"></label>
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
            <statement name="catch">
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
        <block type="s4d_return"></block>
        <block type="is_a_number_or_string"></block>
        <block type="s4d_string_to_number"></block>
        
        <block type="frost_current"/>
        <block type="gsa_bypass_type"/>
    </category>
    <sep class="bt"/>
    <category name="Blockly" colour="120">
        <category name="Shaping" colour="#549654">
            <label text="Block Data"></label>
            <block type="${prefix}setColour">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
            </block>
            <block type="${prefix}setCommentText">
                <value name="TEXT">
                    <shadow type="text"/>
                </value>
            </block>
            <block type="${prefix}setHelpUrl">
                <value name="TEXT">
                    <shadow type="text"/>
                </value>
            </block>
            <block type="${prefix}setInputsInline"/>
            <block type="${prefix}blockConnections"/>
            <block type="${prefix}blockConnectionsType">
                <value name="TYPES">
                    <block type="lists_create_with">
                        <mutation items="0"/>
                    </block>
                </value>
            </block>
            <block type="${prefix}setTooltip">
                <value name="TEXT">
                    <shadow type="text"/>
                </value>
            </block>
            <block type="${prefix}setOutput">
                <value name="LIST">
                    <block type="lists_create_with">
                        <mutation items="0"/>
                    </block>
                </value>
            </block>
            <label text="Inputs"></label>
            <block type="${prefix}appendDummyInput"/>
            <block type="${prefix}appendValueInput">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}appendStatementInput">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <label text="Editing inputs"></label>
            <block type="${prefix}setInputCheck">
                <value name="CHECK">
                    <block type="lists_create_with">
                        <mutation items="0"/>
                    </block>
                </value>
            </block>
            <block type="${prefix}setInputFieldAlignment"/>
            <label text="Fields"></label>
            <block type="${prefix}appendField">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}appendFieldType">
                <value name="ID">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="Fields" colour="#4B874B">
            <block type="${prefix}FieldFieldLabelSerializable">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}FieldFieldTextInput">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}FieldFieldNumber">
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="MIN">
                    <shadow type="math_arithmetic">
                        <field name="OP">MINUS</field>
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="B">
                            <shadow type="math_constant">
                                <field name="CONSTANT">INFINITY</field>
                            </shadow>
                        </value>
                    </shadow>
                </value>
                <value name="MAX">
                    <shadow type="math_constant">
                        <field name="CONSTANT">INFINITY</field>
                    </shadow>
                </value>
                <value name="PRECISION">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}FieldFieldAngle">
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}FieldFieldCheckbox">
                <value name="BOOL">
                    <shadow type="logic_boolean"/>
                </value>
            </block>
            <block type="${prefix}FieldFieldColour">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">#ff0000</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}FieldFieldVariable">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}FieldFieldImage">
                <value name="IMAGE">
                    <shadow type="text">
                        <field name="TEXT">https://www.gstatic.com/codesite/ph/images/star_on.gif</field>
                    </shadow>
                </value>
                <value name="WIDTH">
                    <shadow type="math_number">
                        <field name="NUM">15</field>
                    </shadow>
                </value>
                <value name="HEIGHT">
                    <shadow type="math_number">
                        <field name="NUM">15</field>
                    </shadow>
                </value>
                <value name="ALT">
                    <shadow type="text">
                        <field name="TEXT">*</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="Exporting" colour="#488248">
            <label text="Output block code"></label>
            <block type="${prefix}valueToCode">
                <value name="FIELD">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}statementToCode">
                <value name="FIELD">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}getFieldValue">
                <value name="FIELD">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}variableChoiceToCode">
                <value name="FIELD">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <label text=""></label>
            <block type="${prefix}setOutputCode">
                <value name="CODE">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
            </block>
            <block type="${prefix}setOutputCode2">
                <value name="CODE">
                    <shadow type="text">
                        <field name="TEXT"/>
                    </shadow>
                </value>
            </block>
            <label text=""></label>
            <block type="${prefix}getInputById">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
        </category>
    </category>
</xml>`