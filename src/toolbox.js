export default (Blockly) => {
	const toolbox = {
		contents: [
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "BLOCK",
						blockxml: `<block type="controls_if" />`,
						type: "controls_if"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="logic_compare"><field name="OP">EQ</field></block>`,
						type: "logic_compare"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="logic_operation">
                <field name="OP">AND</field>
            </block>`,
						type: "logic_operation"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="logic_negate" />`,
						type: "logic_negate"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </block>`,
						type: "logic_boolean"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="logic_null" />`,
						type: "logic_null"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="logic_ternary" />`,
						type: "logic_ternary"
					}
				],
				name: "{{ TOOLBOX_LOGIC }}",
				colour: "#5b80a5"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_forever">
            </block>`,
						type: "s4d_forever"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>`,
						type: "controls_repeat_ext"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="controls_whileUntil">
                <field name="MODE">WHILE</field>
            </block>`,
						type: "controls_whileUntil"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="controls_for">
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
            </block>`,
						type: "controls_for"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="controls_forEach">
                <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
            </block>`,
						type: "controls_forEach"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="controls_flow_statements">
                <field name="FLOW">BREAK</field>
            </block>`,
						type: "controls_flow_statements"
					}
				],
				name: "{{ TOOLBOX_LOOPS }}",
				colour: "#5ba55b"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "BLOCK",
						blockxml: `<block type="math_number">
                <field name="NUM">0</field>
            </block>`,
						type: "math_number"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_arithmetic">
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
            </block>`,
						type: "math_arithmetic"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_single">
                <field name="OP">ROOT</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">9</field>
                    </shadow>
                </value>
            </block>`,
						type: "math_single"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_trig">
                <field name="OP">SIN</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">45</field>
                    </shadow>
                </value>
            </block>`,
						type: "math_trig"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_constant">
                <field name="CONSTANT">PI</field>
            </block>`,
						type: "math_constant"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_number_property">
                <mutation divisor_input="false" />
                <field name="PROPERTY">EVEN</field>
                <value name="NUMBER_TO_CHECK">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`,
						type: "math_number_property"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_round">
                <field name="OP">ROUND</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">3.1</field>
                    </shadow>
                </value>
            </block>`,
						type: "math_round"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_on_list">
                <mutation op="SUM" />
                <field name="OP">SUM</field>
            </block>`,
						type: "math_on_list"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_modulo">
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
            </block>`,
						type: "math_modulo"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_constrain">
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
            </block>`,
						type: "math_constrain"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="math_random_int">
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
            </block>`,
						type: "math_random_int"
					},
					{ kind: "BLOCK", blockxml: `<block type="math_random_float" />`, type: "math_random_float" }
				],
				name: "{{ TOOLBOX_MATH }}",
				colour: "#5b67a5"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "BLOCK",
						blockxml: '<block type="text">\n<field name="TEXT">\n</field></block>',
						type: "text"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_join">\n<mutation items="2">\n</mutation></block>',
						type: "text_join"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="s4d_replace">\n<value name="TEXT">\n<shadow type="text">\n<field name="TEXT">abc</field>\n</shadow>\n</value>\n<value name="REPLACE">\n<shadow type="text">\n<field name="TEXT">a</field>\n</shadow>\n</value>\n<value name="WITH">\n<shadow type="text">\n<field name="TEXT">b</field>\n</shadow>\n</value>                \n</block>',
						type: "s4d_replace"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="s4d_newline"></block>',
						type: "s4d_newline"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_append">\n<field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>\n<value name="TEXT">\n<shadow type="text">\n<field name="TEXT">\n</field></shadow>\n</value>\n</block>',
						type: "text_append"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_length">\n<value name="VALUE">\n<shadow type="text">\n<field name="TEXT">abc</field>\n</shadow>\n</value>\n</block>',
						type: "text_length"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="s4d_starts_with">\n<value name="STRING">\n<shadow type="text">\n<field name="TEXT">abc</field>\n</shadow>\n</value>\n<value name="SUBSTRING">\n<shadow type="text">\n<field name="TEXT">a</field>\n</shadow>\n</value>\n</block>',
						type: "s4d_starts_with"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="s4d_includes">\n<value name="TEXT">\n<shadow type="text">\n<field name="TEXT">abc</field>\n</shadow>\n</value>\n<value name="INCLUDES">\n<shadow type="text">\n<field name="TEXT">a</field>\n</shadow>\n</value>\n</block>',
						type: "s4d_includes"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_isEmpty">\n<value name="VALUE">\n<shadow type="text">\n<field name="TEXT">\n</field></shadow>\n</value>\n</block>',
						type: "text_isEmpty"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_indexOf">\n<field name="END">FIRST</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n</block>\n</value>\n<value name="FIND">\n<shadow type="text">\n<field name="TEXT">abc</field>\n</shadow>\n</value>\n</block>',
						type: "text_indexOf"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="variables_get">\n<field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n</block>',
						type: "variables_get"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_charAt">\n<mutation at="true">\n<field name="WHERE">FROM_START</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n</block>\n</value>\n</mutation></block>',
						type: "text_charAt"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="variables_get">\n<field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n</block>',
						type: "variables_get"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_getSubstring">\n<mutation at1="true" at2="true">\n<field name="WHERE1">FROM_START</field>\n<field name="WHERE2">FROM_START</field>\n<value name="STRING">\n<block type="variables_get">\n<field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n</block>\n</value>\n</mutation></block>',
						type: "text_getSubstring"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="variables_get">\n<field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n</block>',
						type: "variables_get"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_changeCase">\n<field name="CASE">UPPERCASE</field>\n<value name="TEXT">\n<shadow type="text">\n<field name="TEXT">abc</field>\n</shadow>\n</value>\n</block>',
						type: "text_changeCase"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="text_trim">\n<field name="MODE">BOTH</field>\n<value name="TEXT">\n<shadow type="text">\n<field name="TEXT">abc</field>\n</shadow>\n</value>\n</block>',
						type: "text_trim"
					}
				],
				name: "{{ TOOLBOX_TEXT }}",
				colour: "#5ba58c"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_create_with">\n<mutation items="0">\n</mutation></block>',
						type: "lists_create_with"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_create_with">\n<mutation items="3">\n</mutation></block>',
						type: "lists_create_with"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_repeat">\n<value name="NUM">\n<shadow type="math_number">\n<field name="NUM">5</field>\n</shadow>\n</value>\n</block>',
						type: "lists_repeat"
					},
					{
						kind: "BLOCK",
						blockxml:
							'<block type="lists_length">\n<block type="lists_isEmpty">\n<block type="lists_indexOf">\n<field name="END">FIRST</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</block>\n<block type="lists_getIndex">\n<mutation statement="false" at="true">\n<field name="MODE">GET</field>\n<field name="WHERE">FROM_START</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>\n<block type="lists_setIndex">\n<mutation at="true">\n<field name="MODE">SET</field>\n<field name="WHERE">FROM_START</field>\n<value name="LIST">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>\n<block type="lists_getSublist">\n<mutation at1="true" at2="true">\n<field name="WHERE1">FROM_START</field>\n<field name="WHERE2">FROM_START</field>\n<value name="LIST">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>\n<block type="lists_split">\n<mutation mode="SPLIT">\n<field name="MODE">SPLIT</field>\n<value name="DELIM">\n<shadow type="text">\n<field name="TEXT">,</field>\n</shadow>\n</value>\n</mutation></block>\n<block type="lists_sort">\n<field name="TYPE">NUMERIC</field>\n<field name="DIRECTION">1</field>\n</block>\n</block></block>',
						type: "lists_length"
					},
					{
						kind: "BLOCK",
						blockxml:
							'<block type="lists_isEmpty">\n<block type="lists_indexOf">\n<field name="END">FIRST</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</block>\n<block type="lists_getIndex">\n<mutation statement="false" at="true">\n<field name="MODE">GET</field>\n<field name="WHERE">FROM_START</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>\n<block type="lists_setIndex">\n<mutation at="true">\n<field name="MODE">SET</field>\n<field name="WHERE">FROM_START</field>\n<value name="LIST">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>\n<block type="lists_getSublist">\n<mutation at1="true" at2="true">\n<field name="WHERE1">FROM_START</field>\n<field name="WHERE2">FROM_START</field>\n<value name="LIST">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>\n<block type="lists_split">\n<mutation mode="SPLIT">\n<field name="MODE">SPLIT</field>\n<value name="DELIM">\n<shadow type="text">\n<field name="TEXT">,</field>\n</shadow>\n</value>\n</mutation></block>\n<block type="lists_sort">\n<field name="TYPE">NUMERIC</field>\n<field name="DIRECTION">1</field>\n</block>\n</block>',
						type: "lists_isEmpty"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_indexOf">\n<field name="END">FIRST</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</block>',
						type: "lists_indexOf"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>',
						type: "variables_get"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_getIndex">\n<mutation statement="false" at="true">\n<field name="MODE">GET</field>\n<field name="WHERE">FROM_START</field>\n<value name="VALUE">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>',
						type: "lists_getIndex"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>',
						type: "variables_get"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_setIndex">\n<mutation at="true">\n<field name="MODE">SET</field>\n<field name="WHERE">FROM_START</field>\n<value name="LIST">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>',
						type: "lists_setIndex"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>',
						type: "variables_get"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_getSublist">\n<mutation at1="true" at2="true">\n<field name="WHERE1">FROM_START</field>\n<field name="WHERE2">FROM_START</field>\n<value name="LIST">\n<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>\n</value>\n</mutation></block>',
						type: "lists_getSublist"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="variables_get">\n<field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n</block>',
						type: "variables_get"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_split">\n<mutation mode="SPLIT">\n<field name="MODE">SPLIT</field>\n<value name="DELIM">\n<shadow type="text">\n<field name="TEXT">,</field>\n</shadow>\n</value>\n</mutation></block>',
						type: "lists_split"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="lists_sort">\n<field name="TYPE">NUMERIC</field>\n<field name="DIRECTION">1</field>\n</block>',
						type: "lists_sort"
					}
				],
				name: "{{ TOOLBOX_LISTS }}",
				colour: "#745ba5"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "BLOCK",
						blockxml: '<block type="colour_picker">\n<field name="COLOUR">#ff0000</field>\n</block>',
						type: "colour_picker"
					},
					{
						kind: "BLOCK",
						blockxml:
							'<block type="colour_random">\n<block type="colour_rgb">\n<value name="RED">\n<shadow type="math_number">\n<field name="NUM">100</field>\n</shadow>\n</value>\n<value name="GREEN">\n<shadow type="math_number">\n<field name="NUM">50</field>\n</shadow>\n</value>\n<value name="BLUE">\n<shadow type="math_number">\n<field name="NUM">0</field>\n</shadow>\n</value>\n</block>\n<block type="colour_blend">\n<value name="COLOUR1">\n<shadow type="colour_picker">\n<field name="COLOUR">#ff0000</field>\n</shadow>\n</value>\n<value name="COLOUR2">\n<shadow type="colour_picker">\n<field name="COLOUR">#3333ff</field>\n</shadow>\n</value>\n<value name="RATIO">\n<shadow type="math_number">\n<field name="NUM">0.5</field>\n</shadow>\n</value>\n</block>\n</block>',
						type: "colour_random"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="colour_rgb">\n<value name="RED">\n<shadow type="math_number">\n<field name="NUM">100</field>\n</shadow>\n</value>\n<value name="GREEN">\n<shadow type="math_number">\n<field name="NUM">50</field>\n</shadow>\n</value>\n<value name="BLUE">\n<shadow type="math_number">\n<field name="NUM">0</field>\n</shadow>\n</value>\n</block>',
						type: "colour_rgb"
					},
					{
						kind: "BLOCK",
						blockxml:
							'<block type="colour_blend">\n<value name="COLOUR1">\n<shadow type="colour_picker">\n<field name="COLOUR">#ff0000</field>\n</shadow>\n</value>\n<value name="COLOUR2">\n<shadow type="colour_picker">\n<field name="COLOUR">#3333ff</field>\n</shadow>\n</value>\n<value name="RATIO">\n<shadow type="math_number">\n<field name="NUM">0.5</field>\n</shadow>\n</value>\n</block>',
						type: "colour_blend"
					}
				],
				name: "{{ TOOLBOX_COLORS }}",
				colour: "#a5745b"
			},
			{ kind: "SEP" },
			{
				kind: "CATEGORY",
				name: "{{ TOOLBOX_VARIABLES }}",
				colour: "#a55b80",
				custom: "VARIABLE"
			},
			{
				kind: "CATEGORY",
				name: "{{ TOOLBOX_FUNCTIONS }}",
				colour: "#995ba5",
				custom: "PROCEDURE"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "BLOCK",
						blockxml: '<block type="s4d_current"></block>',
						type: "s4d_current"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="s4d_run_save_output"></block>',
						type: "s4d_run_save_output"
					},
					{
						kind: "BLOCK",
						blockxml: '<block type="s4d_wait_seconds">\n<value name="TIME">\n<shadow type="math_number">\n<field name="NUM">2</field>\n</shadow>\n</value>\n</block>',
						type: "s4d_wait_seconds"
					}
				],
				name: "{{ TOOLBOX_OTHER }}",
				colour: "#D14081"
			},
			{ kind: "SEP" },
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "LABEL",
						text: "%{BKY_MANDATORY_BLOCKS}",
						"web-class": "boldtext"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_login">
                <value name="TOKEN">
                    <block type="text">
                        <field name="TEXT">Your bot token</field>
                    </block>
                </value>
            </block>`,
						type: "s4d_login"
					},
					{ kind: "LABEL", text: "%{BKY_BASE_BLOCKS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_on_connected"></block>`, type: "s4d_on_connected" },
					{ kind: "LABEL", text: "%{BKY_BOT_INFORMATIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_bot_ping"></block>`, type: "s4d_bot_ping" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_bot_server_count"></block>`, type: "s4d_bot_server_count" },
					{ kind: "LABEL", text: "%{BKY_BOT_ACTIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_set_bot_game"></block>`, type: "s4d_set_bot_game" }
				],
				name: "{{ TOOLBOX_BASE }}",
				colour: "#F46580"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "LABEL",
						text: "%{BKY_MESSAGE_RELATED_BLOCKS}",
						"web-class": "boldtext"
					},
					{ kind: "LABEL", text: "%{BKY_DETECT_MESSAGES}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_on_message"></block>`, type: "s4d_on_message" },
					{ kind: "LABEL", text: "%{BKY_MESSAGE_INFORMATIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_content"></block>`, type: "s4d_message_content" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_id"></block>`, type: "s4d_message_id" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_author"></block>`, type: "s4d_message_author" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_mentioned_member"></block>`, type: "s4d_mentioned_member" },
					{ kind: "LABEL", text: "%{BKY_LABEL_MESSAGE_CONTEXT}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_channel"></block>`, type: "s4d_message_channel" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_guild"></block>`, type: "s4d_message_guild" },
					{ kind: "LABEL", text: "%{BKY_RELATED_TO_MESSAGE_STRINGS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_author_raw"></block>`, type: "s4d_message_author_raw" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_channel_raw"></block>`, type: "s4d_message_channel_raw" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_guild_raw"></block>`, type: "s4d_message_guild_raw" },
					{ kind: "LABEL", text: "%{BKY_MESSAGE_ACTIONS}" },
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>`,
						type: "s4d_reply"
					},
					{ kind: "BLOCK", blockxml: `<block type="s4d_delete"></block>`, type: "s4d_delete" },
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>`,
						type: "s4d_add_reaction"
					},
					{ kind: "LABEL", text: "%{BKY_TOOLS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_message_embed"></block>`, type: "s4d_message_embed" }
				],
				name: "{{ TOOLBOX_E_MESSAGES }}",
				colour: "#41AAC0"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "LABEL",
						text: "%{BKY_JOINS_RELATED_BLOCKS}",
						"web-class": "boldtext"
					},
					{ kind: "LABEL", text: "%{BKY_DETECT_JOINS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_on_member_join"></block>`, type: "s4d_on_member_join" },
					{ kind: "LABEL", text: "%{BKY_JOINING_MEMBER_INFORMATIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_joining_member"></block>`, type: "s4d_joining_member" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_joining_guild"></block>`, type: "s4d_joining_guild" },
					{ kind: "LABEL", text: "%{BKY_RELATED_TO_JOIN_STRINGS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_joining_member_raw"></block>`, type: "s4d_joining_member_raw" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_joining_guild_raw"></block>`, type: "s4d_joining_guild_raw" }
				],
				name: "{{ TOOLBOX_E_JOINS }}",
				colour: "#EABB11"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "LABEL",
						text: "%{BKY_LEAVES_RELATED_BLOCKS}",
						"web-class": "boldtext"
					},
					{ kind: "LABEL", text: "%{BKY_DETECT_LEAVES}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_on_member_leave"></block>`, type: "s4d_on_member_leave" },
					{ kind: "LABEL", text: "%{BKY_LEAVING_MEMBER_INFORMATIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_leaving_guild"></block>`, type: "s4d_leaving_guild" },
					{ kind: "LABEL", text: "%{BKY_RELATED_TO_LEAVE_STRINGS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_leaving_member_raw"></block>`, type: "s4d_leaving_member_raw" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_leaving_guild_raw"></block>`, type: "s4d_leaving_guild_raw" }
				],
				name: "{{ TOOLBOX_E_LEAVES }}",
				colour: "#778899"
			},
			{
				kind: "CATEGORY",
				contents: [
					{
						kind: "LABEL",
						text: "%{BKY_REACT_RELATED_BLOCKS}",
						"web-class": "boldtext"
					},
					{ kind: "LABEL", text: "%{BKY_DETECT_REACT}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_on_react_added"></block>`, type: "s4d_on_react_added" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_on_react_removed"></block>`, type: "s4d_on_react_removed" },
					{ kind: "LABEL", text: "%{BKY_REACT_INFORMATIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_react_message_id"></block>`, type: "s4d_react_message_id" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_react_emoji"></block>`, type: "s4d_react_emoji" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_react_member"></block>`, type: "s4d_react_member" }
				],
				name: "{{ TOOLBOX_E_REACTIONS }}",
				colour: "#89674A"
			},
			{ kind: "SEP" },
			{
				kind: "CATEGORY",
				contents: [
					{ kind: "LABEL", text: "%{BKY_FIND_SERVER}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_get_server"></block>`, type: "s4d_get_server" },
					{ kind: "LABEL", text: "%{BKY_LABEL_SERVER_INFOS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_server_name"></block>`, type: "s4d_server_name" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_member_count"></block>`, type: "s4d_member_count" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_icon_url"></block>`, type: "s4d_icon_url" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_boost_level"></block>`, type: "s4d_boost_level" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_server_owner"></block>`, type: "s4d_server_owner" },
					{ kind: "LABEL", text: "%{BKY_LABEL_MODIFY_SERVER}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_set_server_name"></block>`, type: "s4d_set_server_name" }
				],
				name: "{{ TOOLBOX_SERVER }}",
				colour: "#D85E47"
			},
			{
				kind: "CATEGORY",
				contents: [
					{ kind: "LABEL", text: "%{BKY_FIND_CHANNEL}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_get_channel"></block>`, type: "s4d_get_channel" },
					{ kind: "LABEL", text: "%{BKY_SEND_CHANNEL_LABEL}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_send_channel"></block>`, type: "s4d_send_channel" },
					{ kind: "LABEL", text: "%{BKY_FORMS}" },
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_send_wait_reply">
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
            </block>`,
						type: "s4d_send_wait_reply"
					},
					{ kind: "BLOCK", blockxml: `<block type="s4d_send_wait_reply_value"></block>`, type: "s4d_send_wait_reply_value" },
					{ kind: "LABEL", text: "%{BKY_CHANNEL_MESSAGE_ACTIONS}" },
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_purge">
                <value name="AMOUNT">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value> 
            </block>`,
						type: "s4d_purge"
					},
					{ kind: "LABEL", text: "%{BKY_CHANNEL_ACTIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_create_channel"></block>`, type: "s4d_create_channel" }
				],
				name: "{{ TOOLBOX_CHANNELS }}",
				colour: "#a55b80"
			},
			{
				kind: "CATEGORY",
				contents: [
					{ kind: "LABEL", text: "%{BKY_FIND_ROLE}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_get_role"></block>`, type: "s4d_get_role" },
					{ kind: "LABEL", text: "%{BKY_ROLE_ASSIGNMENT}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_add_role"></block>`, type: "s4d_add_role" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_remove_role"></block>`, type: "s4d_remove_role" }
				],
				name: "{{ TOOLBOX_ROLES }}",
				colour: "#2EB66B"
			},
			{
				kind: "CATEGORY",
				contents: [
					{ kind: "LABEL", text: "%{BKY_FIND_MEMBER}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_get_member"></block>`, type: "s4d_get_member" },
					{ kind: "LABEL", text: "%{BKY_MEMBER_INFORMATIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_member_id"></block>`, type: "s4d_member_id" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_member_discriminator"></block>`, type: "s4d_member_discriminator" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_member_tag"></block>`, type: "s4d_member_tag" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_member_username"></block>`, type: "s4d_member_username" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_member_has_permission"></block>`, type: "s4d_member_has_permission" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_member_is_bot"></block>`, type: "s4d_member_is_bot" },
					{ kind: "LABEL", text: "%{BKY_LABEL_MEMBER_ACTIONS}" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_kick_member"></block>`, type: "s4d_kick_member" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_ban_member"></block>`, type: "s4d_ban_member" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_send_member"></block>`, type: "s4d_send_member" },
					{ kind: "BLOCK", blockxml: `<block type="s4d_set_member_nickname"></block>`, type: "s4d_set_member_nickname" }
				],
				name: "{{ TOOLBOX_MEMBERS }}",
				colour: "#187795"
			},
			{ kind: "SEP" },
			{
				kind: "CATEGORY",
				contents: [
					{ kind: "LABEL", text: "%{BKY_LABEL_READ_DB}" },
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_get_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>`,
						type: "s4d_get_data"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_has_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>`,
						type: "s4d_has_data"
					},
					{ kind: "LABEL", text: "%{BKY_LABEL_UPDATE_DB}" },
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_set_data">
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
            </block>`,
						type: "s4d_set_data"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_delete_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>`,
						type: "s4d_delete_data"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_add_data">
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
            </block>`,
						type: "s4d_add_data"
					},
					{
						kind: "BLOCK",
						blockxml: `<block type="s4d_subtract_data">
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
            </block>`,
						type: "s4d_subtract_data"
					}
				],
				name: "{{ TOOLBOX_DATABASE }}",
				colour: "#FF0000"
			},
			{ kind: "SEP" },
			{
				kind: "CATEGORY",
				contents: [{ kind: "LABEL", text: "HEllo World" }]
			}
		],
		kind: "categoryToolbox",
		xmlns: "https://developers.google.com/blockly/xml",
		id: "toolbox",
		style: "display: none"
	};

	toolbox.contents = toolbox.contents.map((m) => {
		if (m.name) m.name = Blockly.Msg[m.name.replace("{{ ", "").replace(" }}", "")];
		return m;
	});

	return toolbox;
};
