build: lab7.pdf lab8.pdf

lab7.pdf: lab7.ms
	eqn -T pdf lab7.ms | tbl | groff -ms -T pdf > lab7.pdf

lab8.pdf: lab8.ms
	eqn -T pdf lab8.ms | tbl | groff -ms -T pdf > lab8.pdf

.PHONEY: clean

clean:
	@rm lab7.pdf
	@rm lab8.pdf

