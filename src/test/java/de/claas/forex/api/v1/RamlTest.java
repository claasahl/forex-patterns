package de.claas.forex.api.v1;

import static guru.nidi.ramltester.junit.RamlMatchers.*;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;

import org.junit.Test;
import org.raml.parser.loader.FileResourceLoader;
import org.raml.parser.loader.ResourceLoader;
import org.raml.parser.rule.ValidationResult;
import org.raml.parser.visitor.RamlValidationService;

import guru.nidi.ramltester.RamlDefinition;
import guru.nidi.ramltester.RamlLoaders;

public class RamlTest {

	private static String RAML_DIR = "src/main/raml/v1";
	private static String RAML_SPEC = "api.raml";

	@Test
	public void shouldBeValid() throws FileNotFoundException {
		FileInputStream inputStream = new FileInputStream(RAML_DIR + File.separator + RAML_SPEC);
		ResourceLoader loader = new FileResourceLoader(RAML_DIR);
		List<ValidationResult> results = RamlValidationService.createDefault(loader).validate(inputStream, "");
		assertTrue(results.toString(), ValidationResult.areValid(results));
	}
	
	@Test
    public void shouldHaveNoValidationViolations() {
        RamlDefinition api = RamlLoaders.fromFile(RAML_DIR).load(RAML_SPEC);
        assertThat(api.validate(), hasNoViolations());
    }

}
