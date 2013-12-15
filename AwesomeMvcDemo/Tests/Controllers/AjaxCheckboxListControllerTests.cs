using AwesomeMvcDemo.Controllers;
using AwesomeMvcDemo.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Tests.Controllers
{
    [TestFixture]
    public class ChildMealsAjaxCheckboxListControllerTests
    {
        [Test]
        public void GetItems_WhenCalled_ReturnsItems()
        {
            var controller = new ChildMealsAjaxCheckboxListController();

            dynamic result = controller.GetItems(new int[] { }, Db.Categories[0].Id);

            Assert.NotNull(result);
            Assert.IsInstanceOfType(typeof(JsonResult), result);
        }
    }
}
