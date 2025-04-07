lab7.pdf: lab7.ms
	eqn -T pdf lab7.ms | tbl | groff -ms -T pdf > lab7.pdf

.PHONEY: clean

clean:
	@rm lab7.pdf
