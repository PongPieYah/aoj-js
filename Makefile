ROME:=npx rome
PROBLEM=
FILE=main
FILE_PATH=src/$(PROBLEM)/$(FILE).js
TEST_FILE_PATH=src/$(PROBLEM)/$(FILE).test.js

file:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@mkdir -p src/$(PROBLEM) && cp templates/main.js $(FILE_PATH)

run:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@node $(FILE_PATH)

check:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@$(ROME) check $(FILE_PATH)

fmt:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@$(ROME) format $(FILE_PATH) --write

test-file:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@cp templates/main.test.js $(TEST_FILE_PATH)

test:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@npx jest $(TEST_FILE_PATH)

sample-test:
	@npx jest sample/main.test.js
